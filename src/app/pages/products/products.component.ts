import { Component ,OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { PersonalTrainingItem , SubscriptionItem} from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';
import { Checkout } from '../../components/checkout/checkout.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ToasterService, Toast } from 'angular2-toaster';

import * as moment from 'moment';
import { Subscription } from 'rxjs';
declare var goSell;

@Component({
	selector: 'app-products',
	templateUrl: 'products.component.html',
	styleUrls: ['products.component.css'],
})
export class Products implements OnInit {
	subscriptions: Product[] = [];
	personalTrainings: Product[] = [];
	
	selected_tab :number = 2;
	checkoutInfo = {
		product_id: 0,
		coupon_code: "",
		member_id: 0,
		start_date:""
	};
	session_date = moment().format('YYYY-MM-DD') ;
	branch_id = 4;
	currency = "SAR";
	routeChangeSubscription: Subscription;
	_id = 0;
	constructor(private title: Title, private meta: Meta,        
		private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService,
		private toasterService: ToasterService,
		private route: ActivatedRoute,
		private router: Router,
		private dialog: MatDialog
		) {
			this.title.setTitle('Products - 3 Days');
			this.meta.addTags([
				{
					property: 'og:title',
					content: 'Products - 3 Days',
				},
			]);
			goSell.showResult({
				callback: response => {
					localStorage.setItem('goSell_response', JSON.stringify(response.callback));
					console.log("callback", response);
				}
			});
			this.branch_id = this.userService.getDefaultBranchId();
			
			// this.loadingService.setLoading(false);
			this.getProducts();
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
				// this.subscriptions = res.data;
				res.data.forEach(element => {
					if (element.type == "subscription"){
						this.subscriptions.push(element);
					}else{
						this.personalTrainings.push(element);
					}
				});
			}
		});
	}
	buy(){
		this.branchService.buySubscription(this.checkoutInfo).subscribe((res) => {
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Buy subscription failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Buy subscription failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				const toast: Toast = {
					type: 'success',
					title: 'Buy subscription succeeded',
					body: res.message,
				};
				this.toasterService.pop(toast);
			}
			this.unsetCheckoutInfo();
			this.router.navigate(['/subscriptions']);
		});
	}
	unsetCheckoutInfo(){
		localStorage.removeItem('goSell_response');
		localStorage.removeItem('checkoutInfo');
	}
	ngOnInit() {
		// const path = this.route.snapshot.routeConfig['path'];
		console.log('path',this.router.url);
		if (this.router.url.includes('buy')) {
			this.routeChangeSubscription && this.routeChangeSubscription.unsubscribe();
			this.routeChangeSubscription = this.route.params.subscribe((params) => {
				if (this._id !== params['id']) {
					this._id = params['id'];
					let goSell_response = localStorage.getItem('goSell_response');
					let checkoutInfo = localStorage.getItem('checkoutInfo');
					if (null !== goSell_response && null !== checkoutInfo){
						this.checkoutInfo = JSON.parse(checkoutInfo);
						if (this.checkoutInfo.product_id == this._id){
							this.buy();
						}
					}
				}
			});
		}
		this.route.queryParams.subscribe(params => {
			const paramValue = params['tab']; 
			if (paramValue == 'subscriptions') this.selectTab(2);
		});
	}
}
