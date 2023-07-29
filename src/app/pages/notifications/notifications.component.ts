import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/utils/data.types';
@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class Notifications implements OnInit {

    noti_list:Notification[] = [
        {id: 1,icon_class:"person",content:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.","launch_time":"21 Jun 2023 14:30"},
        {id: 2,icon_class:"marker",content:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.","launch_time":"21 Jun 2023 14:30"},
        {id: 3,icon_class:"cash",content:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.","launch_time":"21 Jun 2023 14:30"},
        {id: 4,icon_class:"person-cross",content:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.","launch_time":"21 Jun 2023 14:30"},
        {id: 5,icon_class:"key",content:"هنا محتوى نصي لنوع معين من التنبيهات، تتغير الايكون الخاصة بالتنبيه حسب المحتوى.","launch_time":"21 Jun 2023 14:30"},
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
