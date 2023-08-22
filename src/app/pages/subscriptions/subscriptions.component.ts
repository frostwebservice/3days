import { Component, OnInit } from '@angular/core';
import { SubscriptionSession } from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { SuspendSubscriptionComponent } from 'src/app/components/suspend-subscription/suspend-subscription.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CancelSubscriptionComponent } from 'src/app/components/cancel-subscription/cancel-subscription.component';
import { ToasterService, Toast } from 'angular2-toaster';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.css']
})
export class Subscriptions implements OnInit {

    // slist : SubscriptionSession[] = [
    //     {id:1,title: "عضوية 3 أشهر", start_date:"23 May 2023",expire_date:"23 Aug 2023", price:5999, status: true,banner:'exercise1.png'},
    //     {id:2,title: "عضوية شهر", start_date:"12 May 2023",expire_date:"12 Aug 2023", price:4999, status: false,banner:'exercise2.png'},
    //     {id:3,title: "عضوية 3 أشهر", start_date:"23 May 2023",expire_date:"23 Aug 2023", price:3565, status: false,banner:'exercise1.png'},
    //     {id:4,title: "عضوية 3 أشهر", start_date:"1 May 2023",expire_date:"23 May 2023", price:1112, status: true,banner:'exercise2.png'},
        
    // ];
    slist = [];
    constructor(
        private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService,
		private toasterService: ToasterService,
		private dialog: MatDialog
    ) { 
        this.getMemberSubscriptions();
    }
    ngOnInit(): void {
    }
    getMemberSubscriptions(){
		this.loadingService.setLoading(true);
		this.branchService.getMemberSubscriptions().subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get member subscription failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get member subscription failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				this.slist = res.data;
			}
		});
	}
    reactivateSubscription(subs){
        const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Reactivate Subscription',
			description : 'not_subscribed_buy_pt_session',
			trueLabel : 'Activate',
			falseLabel : 'Cancel'
		};
		this.dialog.open(ConfirmDialogComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			if (res){
				this.branchService.reactivateSubscription(subs.id).subscribe((res) => {
					if (!res) {
						const toast: Toast = {
							type: 'error',
							title: 'Reactivate failed',
							body: "Something went wrong",
						};
						this.toasterService.pop(toast);
						return;
					}else if(!res.status){
						const toast: Toast = {
							type: 'error',
							title: 'Reactivate failed',
							body: res.message,
						};
						this.toasterService.pop(toast);
						return;
					}else{
						const toast: Toast = {
							type: 'success',
							title: 'Success',
							body: res.message,
						};
						this.toasterService.pop(toast);
						this.getMemberSubscriptions();
					}
				});
				
			}
		});
    }
    suspendSubscription(subs){
        const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Suspend Subscription',
			subscription : subs
		};

		this.dialog.open(SuspendSubscriptionComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			if (res && res?.status) this.getMemberSubscriptions();
		});
    }
    cancelSubscription(subs){
        const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Cancel Subscription',
			subscription : subs
		};

		this.dialog.open(CancelSubscriptionComponent, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			if (res && res?.status) this.getMemberSubscriptions();
		});
    }
}
