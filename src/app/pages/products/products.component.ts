import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { PersonalTrainingItem , SubscriptionItem} from 'src/app/utils/data.types';

@Component({
	selector: 'app-products',
	templateUrl: 'products.component.html',
	styleUrls: ['products.component.css'],
})
export class Products {
	subscriptions: SubscriptionItem[] = [
		{ id:0, cycle: 'شهـــري', price: 2999 , currency: '$', _per: 'كل شهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		{ id:1, cycle: 'ثـــلاث أشـــهـر', price: 5990 , currency: '$', _per: 'كل ٣ أشهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		{ id:2, cycle: 'ستــــة أشـــهر', price: 7999 , currency: '$', _per: 'كل ٦ أشهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	];
	
	personalTrainings: PersonalTrainingItem[] = [
		{ id:1, shares: 'حصص 10', price: 500 , currency: '$', _per: 'كل 10 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		{ id:2, shares: '5 حصص', price: 350 , currency: '$', _per: 'كل 5 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		{ id:3, shares: 'حصة واحدة', price: 100 , currency: '$', _per: 'كل 5 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	];
	
	selected_tab :number = 2;

	selectTab (tab:number):void{
		this.selected_tab = tab;
	}
	current_subscriptions :SubscriptionItem = this.subscriptions[2];
	current_personalTrainings : PersonalTrainingItem = this.personalTrainings[1];
	constructor(private title: Title, private meta: Meta) {
		this.title.setTitle('Products - 3 Days')
		this.meta.addTags([
			{
				property: 'og:title',
				content: 'Products - 3 Days',
			},
		])
	}

}
