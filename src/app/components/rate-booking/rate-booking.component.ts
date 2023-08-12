import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';

@Component({
	selector: 'app-rate-booking',
	templateUrl: './rate-booking.component.html',
	styleUrls: ['./rate-booking.component.css']
})
export class RateBookingComponent implements OnInit {

	review ={
		rating: 5,
		class_session_id:  0,
		comments:  "",
	}
	submitting = false;
	constructor(	
		private branchService : BranchService,
		private dialogRef: MatDialogRef<RateBookingComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any
	) {
		console.log(data.appointment);
		this.review.class_session_id = data.appointment.id;
	}

	ngOnInit(): void {
	}

    rate(num:number){
        this.review.rating = num;
    }

	rateSession():void{
		this.branchService.rateBooking(this.review).subscribe((res) => {
			if (!res) {
				return;
			}
			this.dialogRef.close(res);
		});
	}
}
