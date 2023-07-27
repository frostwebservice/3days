import { Component, OnInit } from '@angular/core';
import { TabItem, ClubItem, SubscriptionItem ,PersonalTrainingItem } from 'src/app/utils/data.types';
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor() { }

	tabs: TabItem[] = [
		{ icon: '', label: 'gender', id: 'gender' },
		{ icon: '', label: 'site', id: 'site' },
		{ icon: '', label: 'find a club', id: 'find a club' },
		{ icon: '', label: 'products', id: 'products' },
		{ icon: '', label: 'account', id: 'account' },
		{ icon: '', label: 'payment', id: 'payment' },
	];
	// tabs: TabItem[] = [
	// 	{ icon: '', label: 'الجنس', id: 'gender' },
	// 	{ icon: '', label: 'الموقع', id: 'site' },
	// 	{ icon: '', label: 'البحث عن نادي', id: 'find a club' },
	// 	{ icon: '', label: 'المنتجات', id: 'products' },
	// 	{ icon: '', label: 'الحساب', id: 'account' },
	// 	{ icon: '', label: 'كود التحقق', id: 'validation code' },
	// 	{ icon: '', label: 'الدفع', id: 'payment' },
	// ];
	
	clubs: ClubItem[] = [
		{ name: 'Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية' },
		{ name: 'ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' },
		{ name: 'الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' },
		{ name: 'Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية' },
		// { name: '_Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية' },
		// { name: '_ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' },
		// { name: '_الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' },
		// { name: '_Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية' },
	];

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
	
	selectedTab: TabItem = this.tabs[0];
	isStarted : boolean = false;
	isCompleted : boolean = false;
	lat = 21.4858;
	lng = 39.1925;
	ngOnInit(): void {	}
	changeTab(tab: TabItem): void {
		this.selectedTab = tab;
	}
	startJourney(): void{
		this.isStarted = true;
	}
	nextTab(id: string): void{
		const index = this.tabs.findIndex(tab => tab.id === id)
		if (index === -1 ) {
			this.selectedTab = this.tabs[0];
		}else if (index === this.tabs.length - 1) {
			this.isCompleted = true;
		}else{
			this.selectedTab = this.tabs[index + 1];
		}
	}
	prevTab(id: string): void{
		const index = this.tabs.findIndex(tab => tab.id === id)
		if (index === -1 ) {
			this.selectedTab = this.tabs[0];
		}else if (index === 0) {
			this.isStarted = false;
		}else{
			this.selectedTab = this.tabs[index - 1];
		}
	}

}
