import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { PersonalTrainingItem , SubscriptionItem} from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-products',
	templateUrl: 'products.component.html',
	styleUrls: ['products.component.css'],
})
export class Products {
	subscriptions: Product[] = [];
	personalTrainings: [] = [];
	
	selected_tab :number = 2;
	session_date = (new Date()).toString();
	branch_id = 4;
	currency = "SAR";

	constructor(private title: Title, private meta: Meta,        
		private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService) {
			this.title.setTitle('Products - 3 Days');
			this.meta.addTags([
				{
					property: 'og:title',
					content: 'Products - 3 Days',
				},
			]);
			this.branch_id = this.userService.getDefaultBranchId();
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
		this.branchService.getBranchAllPTSessions(this.branch_id,this.session_date).subscribe((res) => {
			if (!res) {
				return;
			}
			console.log(res);
			this.personalTrainings = res.data;
			this.loadingService.setLoading(false);
		});
	}

}
