import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Checkout } from '../../components/checkout/checkout.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

	constructor(
		private dialog: MatDialog
	) { }

	@Input('product') product;

	currency = "SAR";
	buyProduct(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Buy Subscription',
			subscription : this.product
		};
		this.dialog.open(Checkout, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			console.log(res);
			if (res.status) {
			}
		});
	}
	ngOnInit(): void {
	}

}
