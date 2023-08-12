import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';

@Component({
	selector: 'app-cancel-booking',
	templateUrl: './cancel-booking.component.html',
	styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

	constructor(
		private branchService : BranchService,
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
				return;
			}
			this.dialogRef.close(res);
			console.log("success",res);
		});
	}
}
