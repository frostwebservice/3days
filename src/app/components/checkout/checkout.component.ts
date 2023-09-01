import { Component, OnInit, Inject ,Input, ViewChild, ElementRef } from '@angular/core';
import { Member } from 'src/app/utils/data.types';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef,MatDialogConfig} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductTermsConditionsDialogComponent } from '../product-terms-conditions-dialog/product-terms-conditions-dialog.component';
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
	
	@ViewChild('agree_terms_conditions') agree_terms_conditions: ElementRef;
	user;
	product;
	start_date;
	coupon_is_activated : boolean = false;
	submitting : boolean = false;
	submitted : boolean = false;
	discount_price = 0;
	checkoutRedirectUrl = '';
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
	products: Product[] = [];
	agree_terms_conditions_checkbox = false;
	paymentConf = goSellPaymentConfiguration;
	selected_product_id;
	constructor(
		private branchService : BranchService,
		private userService: UserService,
		private toasterService: ToasterService,
		private dialogRef: MatDialogRef<Checkout>,
		private dialog: MatDialog,
		private loadingService: LoaderService,
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
	selectProduct(){
		const index = this.products.findIndex(p => p.id == this.checkoutInfo.product_id);
		this.product = this.products[index];
		console.log(this.product);
	}
	buyValidate(){
		this.submitted = true;
		if (this.agree_terms_conditions_checkbox){
			this.submitted = false;
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
	}
	openTCDialog(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.data = {
			title: 'Terms and Conditions',
			ar_description : this.product.arabic_terms_conditions,
			en_description : this.product.terms_conditions,
		};
		this.dialog.open(ProductTermsConditionsDialogComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {});
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
		this.getProducts();
	}
	getProducts(){
		this.loadingService.setLoading(true);
		this.branchService.getProductList(this.userService.getClientId()).subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get product failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get product failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				res.data.forEach(element => {
					this.products.push(element);
					// if (element.type == "subscription"){
					// 	this.subscriptions.push(element);
					// }else{
					// 	this.personalTrainings.push(element);
					// }
				});
			}
		});
	}
}
