import { Component ,OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { PersonalTrainingItem , SubscriptionItem} from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';
import { Checkout } from '../../components/checkout/checkout.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
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
			if (!res) {
				return;
			}
			console.log(res);
			this.subscriptions = res.data;
			this.loadingService.setLoading(false);
		});
	}
	getAllPts(){
		this.loadingService.setLoading(true);
		this.branchService.getBranchAllPTSessions(this.branch_id,moment(this.session_date).format('YYYY-MM-DD')).subscribe((res) => {
			if (!res) {
				return;
			}
			console.log(res);
			this.personalTrainings = res.data;
			this.loadingService.setLoading(false);
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
