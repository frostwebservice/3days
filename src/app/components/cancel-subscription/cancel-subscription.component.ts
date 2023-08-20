import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
	selector: 'app-cancel-subscription',
	templateUrl: './cancel-subscription.component.html',
	styleUrls: ['./cancel-subscription.component.css']
})
export class CancelSubscriptionComponent implements OnInit {
	submitting = false;
	constructor(
		private branchService : BranchService,
		private toasterService: ToasterService,
		private dialogRef: MatDialogRef<CancelSubscriptionComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any
	) {
	}
	ngOnInit(): void {
	}
	cancelSubscription(subscription_id:number){
		this.submitting = true;
		this.branchService.cancelSubscription(subscription_id).subscribe((res) => {
			this.submitting = false;
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Cancel subscription failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Cancel subscription failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Cancel subscription succeeded',
					body: res.message,
				};
			}
			this.dialogRef.close(res);
		});
	}
}
