import { Component ,OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { PersonalTrainingItem , SubscriptionItem} from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';
import { Checkout } from '../../components/checkout/checkout.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ToasterService, Toast } from 'angular2-toaster';
import * as moment from 'moment';

@Component({
	selector: 'app-products',
	templateUrl: 'products.component.html',
	styleUrls: ['products.component.css'],
})
export class Products implements OnInit {
	subscriptions: Product[] = [];
	personalTrainings: [] = [];
	
	selected_tab :number = 2;
	// session_date = "2000-01-01" ;
	session_date = moment().format('YYYY-MM-DD') ;
	branch_id = 4;
	currency = "SAR";

	constructor(private title: Title, private meta: Meta,        
		private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService,
		private toasterService: ToasterService,
		private dialog: MatDialog
		) {
			this.title.setTitle('Products - 3 Days');
			this.meta.addTags([
				{
					property: 'og:title',
					content: 'Products - 3 Days',
				},
			]);
			this.branch_id = this.userService.getDefaultBranchId();
			
			// this.loadingService.setLoading(false);
			this.getProducts();
			this.getAllPts();
	}
	selectTab (tab:number):void{
		this.selected_tab = tab;
	}
	getProducts(){
		this.loadingService.setLoading(true);
		this.branchService.getProductList(this.userService.getClientId()).subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get product failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get product failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				this.subscriptions = res.data;
			}
		});
	}
	getAllPts(){
		this.loadingService.setLoading(true);
		this.branchService.getBranchAllPTSessions(this.branch_id,moment(this.session_date).format('YYYY-MM-DD')).subscribe((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get PT session failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get PT session failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				this.personalTrainings = res.data;
			}
		});
	}
	changeDate($event){
		this.getAllPts();
	}
	buySubscription(subscription){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Buy Subscription',
			subscription : subscription
		};
		this.dialog.open(Checkout, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			console.log(res);
			if (res.status) {
			}
		});
	}
	ngOnInit(): void {}
}
