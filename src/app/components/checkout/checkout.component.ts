import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/utils/data.types';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
// BranchService
import { goSellPaymentConfiguration } from 'src/app/utils/paymentConfig';

declare var goSell;

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class Checkout implements OnInit {
	user;
	product;
	start_date;
	coupon_is_activated : boolean = false;
	submitting : boolean = false;
	discount_price = 0;
	checkoutRedirectUrl = '';
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
	paymentConf = goSellPaymentConfiguration;
	constructor(
		private branchService : BranchService,
		private userService: UserService,
		private toasterService: ToasterService,
		private dialogRef: MatDialogRef<Checkout>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.product = data.subscription;
		this.user = this.userService.getUser();
		this.checkoutInfo.member_id = this.user.id;
		this.checkoutInfo.product_id = this.product.id;
		this.start_date = moment().format('YYYY-MM-DD');
		this.checkoutRedirectUrl = data.checkoutRedirectUrl;
	}
	checkCoupon(){
		this.branchService.checkCoupon(this.checkoutInfo.product_id,this.checkoutInfo.coupon_code).subscribe((res) => {
			if (!res) {
				this.coupon_is_activated = false;
				const toast: Toast = {
					type: 'error',
					title: 'Activation failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				this.coupon_is_activated = false;
				const toast: Toast = {
					type: 'error',
					title: 'Activation failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Activation succeeded',
					body: res.message,
				};
				this.toasterService.pop(toast);

				this.coupon_is_activated = true;
				this.discount_price = 10;
			}
		});
	}
	buyValidate(){
		this.submitting = true;
		this.checkoutInfo.start_date = moment(this.start_date).format('YYYY-MM-DD');

		this.branchService.validateBuySubscription(this.checkoutInfo).subscribe((res) => {
			this.submitting = false;
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Buy validation failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Buy validation failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Buy validation succeeded',
					body: "You can buy this subscription now",
				};
				this.toasterService.pop(toast);
				localStorage.setItem('checkoutInfo', JSON.stringify(this.checkoutInfo));
				this.showGosell();
			}
		});
	}
	showGosell(){
		// this.buy();
		console.log(environment.front + "product");
		let customer = {
			...this.paymentConf.customer,
			first_name : this.user.english_name,
			email : this.user.email,
			phone: {
				country_code: "966",
				number: this.user.mobile
			}
		};
		let transaction = {
			mode:'charge',
			charge:{
				...this.paymentConf.transaction.charge,
				description: "Pay for product",
				redirect : environment.front + this.checkoutRedirectUrl
			}
		};
		let order = {
			...this.paymentConf.order,
			amount: this.product.amount_after_vat - this.discount_price,
			items:[{
				id: this.product.id,
				name: this.product.english_name,
				description: this.product.english_description,
				quantity: "x1",
				amount_per_unit: this.product.amount_after_vat,
				discount:{
					type: 'coupon',
					value: this.discount_price.toString()
				},
				total_amount: 'SAR' + (this.product.amount_after_vat - this.discount_price)
			}]
		};
		this.paymentConf = {
			...this.paymentConf,
			customer: customer,
			transaction: transaction,
			order: order
		}
		goSell.config({
			...this.paymentConf,
			callback:(response) => {
				console.log("transjaction",response);
				if (response?.id){
					let success_message = response.currency + " " + response.amount + " Paid successfully. ID is " + response.id
					const toast: Toast = {
						type: 'success',
						title: 'Payment Done',
						body: success_message,
					};
					this.toasterService.pop(toast);
					this.branchService.setTransaction(response);
				}else{
					const toast: Toast = {
						type: 'error',
						title: 'Payment Failed',
						body: response.message,
					};
					this.toasterService.pop(toast);
					this.dialogRef.close(false);
				}
			},
			onClose: () => {
				console.log("onClose Event");
			},
		});
		goSell.openLightBox();
	}
	ngOnInit(): void {
	}

}
