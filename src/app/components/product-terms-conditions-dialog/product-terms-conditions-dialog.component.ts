import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-product-terms-conditions-dialog',
	templateUrl: './product-terms-conditions-dialog.component.html',
	styleUrls: ['./product-terms-conditions-dialog.component.css']
})
export class ProductTermsConditionsDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ProductTermsConditionsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
	}

}
