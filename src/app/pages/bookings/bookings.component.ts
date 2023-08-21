import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TimeSession ,AppointmentItem} from 'src/app/utils/data.types';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CancelBookingComponent } from 'src/app/components/cancel-booking/cancel-booking.component';
import { RateBookingComponent } from 'src/app/components/rate-booking/rate-booking.component';
import { ToasterService, Toast } from 'angular2-toaster';
import {
	NgbDateStruct,
	NgbCalendar,
	NgbTimeStruct,
	NgbDatepicker
} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import * as moment from 'moment';

@Component({
	selector: 'app-bookings',
	templateUrl: 'bookings.component.html',
	styleUrls: ['bookings.component.css'],
})
export class Bookings {

	sessionlist = [];
	appointmentlist = [];
	selected_tab :number = 1;
	session_date = moment().format('YYYY-MM-DD') ;
	selectTab (tab:number):void{
		this.selected_tab = tab;
	}
	constructor(private title: Title, private meta: Meta,
		private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService,
		private toasterService: ToasterService,
		private dialog: MatDialog
		) {
			this.title.setTitle('Bookings - 3 Days')
			this.meta.addTags([
				{
					property: 'og:title',
					content: 'Bookings - 3 Days',
				},
			])
			this.getMemberBookings();
			this.getMemberPTSessions();
			
	}
	getMemberBookings(){
		this.loadingService.setLoading(true);
		this.branchService.getMemberBookings(this.userService.getDefaultBranchId()).subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get member booking failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				// const toast: Toast = {
				// 	type: 'error',
				// 	title: 'Get member booking failed',
				// 	body: res.message,
				// };
				// this.toasterService.pop(toast);
				return;
			}else{
				this.appointmentlist = res.data;
			}
		});
	}
	getMemberPTSessions(){
		console.log(this.session_date);
		this.loadingService.setLoading(true);
		this.branchService.getSubscriptionSessions(this.userService.getDefaultBranchId(),moment(this.session_date).format('YYYY-MM-DD')).subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get member PT session failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				// const toast: Toast = {
				// 	type: 'error',
				// 	title: 'Get member PT session failed',
				// 	body: res.message,
				// };
				// this.toasterService.pop(toast);
				return;
			}else{
				this.sessionlist = res.data;
			}
		});
	}
	changeDate($event){
		this.getMemberPTSessions();
	}
	cancelBooking(appointment){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Cancel Booking',
			appointment : appointment
		};
		this.dialog.open(CancelBookingComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			console.log(res);
			if (res.status) {
				this.getMemberBookings();
			}
		});
	}

	rateBooking(appointment){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Rate Booking',
			appointment : appointment
		};

		this.dialog.open(RateBookingComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			console.log(res);
		});
	}
}
