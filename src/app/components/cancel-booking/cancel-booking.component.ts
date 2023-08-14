import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
	selector: 'app-cancel-booking',
	templateUrl: './cancel-booking.component.html',
	styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

	constructor(
		private branchService : BranchService,
		private toasterService: ToasterService,
		private dialogRef: MatDialogRef<CancelBookingComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any
	) {
		console.log(data.appointment);
	}
	ngOnInit(): void {
	}
	cancelBooking(booking_id){
		this.branchService.cancelBooking(booking_id).subscribe((res) => {
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Cancel booking failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Cancel booking failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Cancel booking succeeded',
					body: res.message,
				};
			}
			this.dialogRef.close(res);
		});
	}
}
