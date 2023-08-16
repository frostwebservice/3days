import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/utils/data.types';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
// BranchService
// declare var goSell;

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
		this.buy();
		// goSell.openLightBox();
	}
	ngOnInit(): void {
	}

}
