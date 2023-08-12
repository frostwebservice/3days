import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';

@Component({
	selector: 'app-cancel-subscription',
	templateUrl: './cancel-subscription.component.html',
	styleUrls: ['./cancel-subscription.component.css']
})
export class CancelSubscriptionComponent implements OnInit {
	submitting = false;
	constructor(
		private branchService : BranchService,
		private dialogRef: MatDialogRef<CancelSubscriptionComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any
	) {
		console.log(data.subscription);
	}
	ngOnInit(): void {
	}
	cancelSubscription(subscription_id){
		this.branchService.cancelSubscription(subscription_id).subscribe((res) => {
			if (!res) {
				return;
			}
			this.dialogRef.close(res);
			console.log("success",res);
			this.submitting = false;
		});
	}
}
