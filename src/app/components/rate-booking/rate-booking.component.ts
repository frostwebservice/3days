import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { BranchService } from 'src/app/services/branch.service';
import { ToasterService, Toast } from 'angular2-toaster';

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
		private toasterService: ToasterService,
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
				const toast: Toast = {
					type: 'error',
					title: 'Rate booking failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Rate booking failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Rate booking succeeded',
					body: res.message,
				};
			}
			this.dialogRef.close(res);
		});
	}
}
