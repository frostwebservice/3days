import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Checkout } from '../../components/checkout/checkout.component';
import { BranchService } from 'src/app/services/branch.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import {
	RouterStateSnapshot,
	Router
} from '@angular/router';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

	constructor(
		private branchService : BranchService,
		private dialog: MatDialog,		
		private router: Router,
		private toasterService: ToasterService,
		private state: RouterStateSnapshot,
		private userService:UserService
	) { }

	@Input('product') product;
	@Input('checkoutRedirectUrl') checkoutRedirectUrl;
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
	currency = "SAR";
	buyProduct(){
		if (this.userService.isAuthenticated()){
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.data = {
				title: 'Buy Subscription',
				subscription : this.product,
				checkoutRedirectUrl: this.checkoutRedirectUrl
			};
			this.dialog.open(Checkout, dialogConfig)
			.afterClosed()
			.subscribe((res) => {
				console.log(res);
				if (res.status) {
				}
			});
		}else{
			this.router.navigate(['/login'], {
				queryParams: { returnUrl: '/products' }
			});
			const toast: Toast = {
				type: 'warning',
				title: 'Purchase Product',
				body: 'To buy subscription, Sign up please',
			};
			this.toasterService.pop(toast);
		}
	}
	ngOnInit(): void {
	}

}
