import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';

@Component({
	selector: 'app-suspend-subscription',
	templateUrl: './suspend-subscription.component.html',
	styleUrls: ['./suspend-subscription.component.css']
})
export class SuspendSubscriptionComponent implements OnInit {
	submitting = false;
	param = {
		"subscription_id": 0,
		"suspension_days": 0,
		"suspension_date": ""
	};
	constructor(
		private branchService : BranchService,
		private dialogRef: MatDialogRef<SuspendSubscriptionComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any
	) {
		console.log(data.subscription);
		this.param.subscription_id = data.subscription.id;
	}

	ngOnInit(): void {
	}

}
