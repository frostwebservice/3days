import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/utils/data.types';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-financial-operations',
    templateUrl: './financial-operations.component.html',
    styleUrls: ['./financial-operations.component.css']
})
export class FinancialOperations implements OnInit {
    invoice_list:Invoice[] = [
        // {id: 104,amount_after_vat: 1150.45,vat_amount: 150.00,amount: 1000.45,name: "اشتراك 3 أشهر",payment_way:"نقدي",status:"paid",created_at: '21 Jun 2023 14:30'},
    ];
    constructor(
        private userService: UserService,
        private loadingService: LoaderService,
    ) { 
        this.loadingService.setLoading(true);
        this.userService.getInvoices().then((res) => {
            if (!res) {
                console.log('get_non_invoices');
                return;
            }
            console.log(res);
            this.invoice_list = res.data;
            this.loadingService.setLoading(false);

        }).catch((err) => {
            console.log(err);
        });
    }

    ngOnInit(): void {
    }

}
