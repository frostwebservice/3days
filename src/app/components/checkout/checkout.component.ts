import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/utils/data.types';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
// import goSell from 'src/app/paymentConfig'
// BranchService
declare var goSell;

goSell.config({
	containerID:"goSell-container",
	gateway:{
		publicKey:"pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
		language:"en",
		contactInfo:true,
		supportedCurrencies:"all",
		supportedPaymentMethods: "all",
		saveCardOption:false,
		customerCards: true,
		notifications:'standard',
		callback:(response) => {
			console.log('response', response);
		},
		onClose: () => {
			console.log("onClose Event");
		},
		backgroundImg: {
			url: 'imgURL',
			opacity: '0.5'
		},
		labels:{
			cardNumber:"Card Number",
			expirationDate:"MM/YY",
			cvv:"CVV",
			cardHolder:"Name on Card",
			actionButton:"Pay"
		},
		style: {
			base: {
				color: '#535353',
				lineHeight: '18px',
				fontFamily: 'sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: 'rgba(0, 0, 0, 0.26)',
					fontSize:'15px'
				}
			},
			invalid: {
				color: 'red',
				iconColor: '#fa755a '
			}
		}
	},
	customer:{
		id:"cus_m1QB0320181401l1LD1812485",
		first_name: "First Name",
		middle_name: "Middle Name",
		last_name: "Last Name",
		email: "demo@email.com",
		phone: {
			country_code: "965",
			number: "99999999"
		}
	},
	order:{
		amount: 100,
		currency:"KWD",
		items:[{
			id:1,
			name:'item1',
			description: 'item1 desc',
			quantity:'x1',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		},
		{
			id:2,
			name:'item2',
			description: 'item2 desc',
			quantity:'x2',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		},
		{
			id:3,
			name:'item3',
			description: 'item3 desc',
			quantity:'x1',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		}],
		shipping:null,
		taxes: null
	},
	transaction:{
		mode: 'charge',
		charge:{
			saveCard: false,
			threeDSecure: true,
			description: "Test Description",
			statement_descriptor: "Sample",
			reference:{
				transaction: "txn_0001",
				order: "ord_0001"
			},
			metadata:{},
			receipt:{
				email: false,
				sms: true
			},
			redirect: "./redirect.html",
			post: null,
		}
	}
});

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
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
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
	buy(){
		this.submitting = true;
		this.checkoutInfo.start_date = moment(this.start_date).format('YYYY-MM-DD');

		this.branchService.buySubscription(this.checkoutInfo).subscribe((res) => {
			this.submitting = false;
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Buy subscription failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Buy subscription failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Buy subscription succeeded',
					body: res.message,
				};
				this.toasterService.pop(toast);
			}
			this.dialogRef.close(res);
		});
	}
	showGosell(){
		// this.buy();
		goSell.openLightBox();
	}
	ngOnInit(): void {
	}

}
