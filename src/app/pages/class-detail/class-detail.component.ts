import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
@Component({
	selector: 'app-class-detail',
	templateUrl: './class-detail.component.html',
	styleUrls: ['./class-detail.component.css']
})
export class ClassDetail implements OnInit {
	personalTraining;
	submitting = false;
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
	constructor(
		private dialogRef: MatDialogRef<ClassDetail>,
		private branchService: BranchService,
		private userService: UserService,
        @Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.personalTraining = data.personalTraining;
		this.checkoutInfo.member_id = this.userService.getUser().id;
		this.checkoutInfo.product_id = data.personalTraining.id;
	}
	// openDays = ['11-06-2023','12-06-2023','15-06-2023','18-06-2023','19-06-2023','23-06-2023','27-06-2023',];
	// openTimes = ['13:00 - 14:00','15:00 - 16:00','17:00 - 19:00','19:00 - 20:00','21:00 - 22:00'];
	ngOnInit(): void {
	}
	reserveSeat(){
		this.submitting = true;
		this.checkoutInfo.start_date = moment(this.personalTraining.session_date).format('YYYY-MM-DD');
		this.branchService.buySubscription(this.checkoutInfo).subscribe((res) => {
			this.submitting = true;
			if (!res) {
				return;
			}
			console.log(res);
			this.dialogRef.close(res);
		});
	}

}
