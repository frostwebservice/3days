import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TimeSession ,AppointmentItem} from 'src/app/utils/data.types';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CancelBookingComponent } from 'src/app/components/cancel-booking/cancel-booking.component';
import { RateBookingComponent } from 'src/app/components/rate-booking/rate-booking.component';
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
	// sessionlist : TimeSession[] = [
    //     {id: 1, class_name:"لياقة بدنية",trainer_name:"مع كورن",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع سارة حسام",branch_name:"Al-sahafa male",time:"4:00-5:00",count:3,photo:"person2.png"},
    //     {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:8,photo:"person2.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:0,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:5,photo:""},
    // ];
	// appointmentlist : AppointmentItem[] = [
    //     {id: 345422, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"13:00 - 14:00",date:"11-06-2023",status:"completed",banner:"bookings1.png"},
    //     {id: 345423, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"16:00 - 17:00",date:"14-06-2023",status:"active",banner:"bookings1.png"},
    //     {id: 345424, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"8:00 - 9:00",date:"15-06-2023",status:"pending",banner:"bookings1.png"},
    //     {id: 345425, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"13:00 - 14:00",date:"11-06-2023",status:"inactive",banner:"bookings1.png"},
    // ];
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
			if (!res) {
				return;
			}
			console.log(res);
			this.appointmentlist = res.data;
			this.loadingService.setLoading(false);
		});
	}
	getMemberPTSessions(){
		console.log(this.session_date);
		this.loadingService.setLoading(true);
		this.branchService.getMemberPTSessions(this.userService.getDefaultBranchId(),moment(this.session_date).format('YYYY-MM-DD')).subscribe((res) => {
			if (!res) {
				return;
			}
			console.log(res);
			this.sessionlist = res.data;
			this.loadingService.setLoading(false);
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
