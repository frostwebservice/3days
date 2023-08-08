import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/utils/data.types';

import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class Notifications implements OnInit {

    constructor(
        private userService: UserService,
        private loadingService: LoaderService
    ) {
        this.loadingService.setLoading(true);
        this.userService.getNotifications()
            .subscribe((res) => {
                this.loadingService.setLoading(false);
                this.noti_list = res.data;
            });
    }
    
    lang = localStorage.getItem('lang');
    noti_list:Notification[] = [
        {id:"1",icon:"account",arabic_description:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.",english_description:"english_description",arabic_title:"arabic title",english_title: "english title",type:"type",arabic_created_at:"arabic created at",english_created_at:"english_created_at",created_at:"2023-08-07T11:54:08.000000Z"},
        {id:"2",icon:"subscription",arabic_description:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.",english_description:"english_description",arabic_title:"arabic title",english_title: "english title",type:"type",arabic_created_at:"arabic created at",english_created_at:"english_created_at",created_at:"2023-08-07T11:54:08.000000Z"},
        {id:"3",icon:"session",arabic_description:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.",english_description:"english_description",arabic_title:"arabic title",english_title: "english title",type:"type",arabic_created_at:"arabic created at",english_created_at:"english_created_at",created_at:"21 Jun 2023 14:30"},
        {id:"4",icon:"branch",arabic_description:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.",english_description:"english_description",arabic_title:"arabic title",english_title: "english title",type:"type",arabic_created_at:"arabic created at",english_created_at:"english_created_at",created_at:"21 Jun 2023 14:30"},
        {id:"5",icon:"payment",arabic_description:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.",english_description:"english_description",arabic_title:"arabic title",english_title: "english title",type:"type",arabic_created_at:"arabic created at",english_created_at:"english_created_at",created_at:"21 Jun 2023 14:30"},
    ];
	   
    ngOnInit(): void {
    }

}
