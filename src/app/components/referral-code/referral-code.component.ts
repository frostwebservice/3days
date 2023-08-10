import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";

@Component({
	selector: 'app-referral-code',
	templateUrl: './referral-code.component.html',
	styleUrls: ['./referral-code.component.css']
})
export class ReferralCodeComponent implements OnInit {
	referral_code="3d78021";
	constructor(
		private dialogRef: MatDialogRef<ReferralCodeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.referral_code = this.data.code;
	}

	ngOnInit(): void {
	}

}
