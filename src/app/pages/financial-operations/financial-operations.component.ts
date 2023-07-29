import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/utils/data.types';

@Component({
    selector: 'app-financial-operations',
    templateUrl: './financial-operations.component.html',
    styleUrls: ['./financial-operations.component.css']
})
export class FinancialOperations implements OnInit {
    invoice_list:Invoice[] = [
        {id: 104,total_price: 1150.45,tax: 150.00,discount: 0,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '21 Jun 2023 14:30'},
        {id: 106,total_price: 1550.45,tax: 150.00,discount: 230,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '16 Jan 2023 16:10'},
        {id: 107,total_price: 190.45,tax: 150.00,discount: 0,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '16 July 2023 08:00'},
        {id: 109,total_price: 4150.45,tax: 150.00,discount: 110,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '11 Sept 2023 15:50'},
        {id: 112,total_price: 2323.45,tax: 150.00,discount: 0,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '8 Jun 2023 23:20'},
        {id: 113,total_price: 3666.00,tax: 150.00,discount: 0,item: "اشتراك 3 أشهر",method:"نقدي",status:"paid",created_at: '1 Jun 2023 14:30'},
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
