import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';
import * as moment from 'moment';
@Component({
	selector: 'app-class-detail',
	templateUrl: './class-detail.component.html',
	styleUrls: ['./class-detail.component.css']
})
export class ClassDetail implements OnInit {
	personalTraining;
	submitting = false;
	availableSeats = 0;
	constructor(
		private dialogRef: MatDialogRef<ClassDetail>,
		private branchService: BranchService,
		private userService: UserService,
		private toasterService: ToasterService,
        @Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.personalTraining = data.personalTraining;
	}
	// openDays = ['11-06-2023','12-06-2023','15-06-2023','18-06-2023','19-06-2023','23-06-2023','27-06-2023',];
	// openTimes = ['13:00 - 14:00','15:00 - 16:00','17:00 - 19:00','19:00 - 20:00','21:00 - 22:00'];
	ngOnInit(): void {
	}
	reserveSeat(){
		this.submitting = true;
		this.branchService.bookSession(this.data.personalTraining.id).subscribe((res) => {
			this.submitting = true;
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Reserve seat failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Reserve seat failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Reserve seat succeeded',
					body: res.message,
				};
				this.toasterService.pop(toast);
			}
			this.dialogRef.close(res);
		});
	}
	getSessionsSeats(){
		this.branchService.getSessionsSeats(this.data.personalTraining.id).subscribe((res) => {
			this.submitting = true;
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Available Seats',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Available Seats',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				this.availableSeats=parseInt(res.capacity) - parseInt(res.bookings_count)
			}
			this.dialogRef.close(res);
		});
	}
}
