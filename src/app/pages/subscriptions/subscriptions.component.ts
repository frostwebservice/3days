import { Component, OnInit } from '@angular/core';
import { SubscriptionSession } from 'src/app/utils/data.types';
@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.css']
})
export class Subscriptions implements OnInit {

    slist : SubscriptionSession[] = [
        {id:1,title: "عضوية 3 أشهر", start_date:"23 May 2023",expire_date:"23 Aug 2023", price:5999, status: true,banner:'exercise1.png'},
        {id:2,title: "عضوية شهر", start_date:"12 May 2023",expire_date:"12 Aug 2023", price:4999, status: false,banner:'exercise2.png'},
        {id:3,title: "عضوية 3 أشهر", start_date:"23 May 2023",expire_date:"23 Aug 2023", price:3565, status: false,banner:'exercise1.png'},
        {id:4,title: "عضوية 3 أشهر", start_date:"1 May 2023",expire_date:"23 May 2023", price:1112, status: true,banner:'exercise2.png'},
    ];
    constructor() { }
    ngOnInit(): void {
    }
}
