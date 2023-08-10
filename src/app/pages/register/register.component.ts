import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TabItem, SubscriptionItem ,PersonalTrainingItem } from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { Product } from 'src/app/models/product.model';
import { Cookie } from 'src/app/utils/cookie';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmCodeComponent } from 'src/app/components/comfirm-code/confirm-code.component';

@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
	@ViewChild('signupForm') signupForm: ElementRef;
	@ViewChild('mobile') mobile: ElementRef;
	@ViewChild('agree_terms_conditions') agree_terms_conditions: ElementRef;
	@ViewChild('email') email: ElementRef;
	@ViewChild('password') password: ElementRef;
	@ViewChild('confirmPassword') confirmPassword: ElementRef;
	@ViewChild('first_name') first_name: ElementRef;
	@ViewChild('last_name') last_name: ElementRef;
	@ViewChild('national_id') national_id: ElementRef;
	@ViewChild('dob') dob: ElementRef;
	@ViewChild('subscription_day') subscription_day: ElementRef;
	@ViewChild('cvv') cvv: ElementRef;
	@ViewChild('card_number') card_number: ElementRef;
	@ViewChild('date_year') date_year: ElementRef;
	@ViewChild('date_month') date_month: ElementRef;
	@Input() isValid : boolean;
	constructor(
		private userService: UserService,
		private branchService: BranchService,
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog
	) {
		this.onSearchBranch();
		this.getProducts();
	}
	user = {
		client_id : 3,
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		mobile: '',
		gender: 'male',
		dob: '',
		national_id: '',
		default_branch: 4,
		preferred_language: "en",
		subscription_day: '',
		promotional_code: '',
		card_number: '',
		cvv: '',
		date_year: '',
		date_month: '',
		fcm_token: "firebase token",
	};

	tabs: TabItem[] = [
		{ icon: '', label: 'gender', id: 'gender', passed: false },
		{ icon: '', label: 'site', id: 'site' , passed: false},
		{ icon: '', label: 'find a club', id: 'find a club' , passed: false},
		{ icon: '', label: 'account', id: 'account' , passed: false},
		{ icon: '', label: 'products', id: 'products' , passed: false},
		{ icon: '', label: 'payment', id: 'payment' , passed: false}
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
	
	clubs: Branch[];
	// clubs: Club[] = [
	// 	{ name: 'Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية',id: 100,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
	// 	{ name: 'ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' ,id: 101,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
	// 	{ name: 'الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' ,id: 102,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
	// 	{ name: 'Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية',id: 103,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال'  },
		// { name: '_Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية' },
		// { name: '_ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' },
		// { name: '_الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' },
		// { name: '_Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية' },
	// ];

	subscriptions: Product[] = [];
		//  = [
		// { id:0, cycle: 'شهـــري', price: 2999 , currency: '$', _per: 'كل شهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		// { id:1, cycle: 'ثـــلاث أشـــهـر', price: 5990 , currency: '$', _per: 'كل ٣ أشهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
		// { id:2, cycle: 'ستــــة أشـــهر', price: 7999 , currency: '$', _per: 'كل ٦ أشهر', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	// ];

	personalTrainings: Product[] = [];
	// PersonalTrainingItem[] = [
	// 	{ id:1, shares: 'حصص 10', price: 500 , currency: '$', _per: 'كل 10 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	// 	{ id:2, shares: '5 حصص', price: 350 , currency: '$', _per: 'كل 5 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	// 	{ id:3, shares: 'حصة واحدة', price: 100 , currency: '$', _per: 'كل 5 حصص', description: 'بإمكانك إلغاء الاشتراك في أي وقت.'},
	// ];
	
	selectedTab: TabItem = this.tabs[0];
	submittedTab: TabItem =this.tabs[0];
	isStarted : boolean = false;
	isCompleted : boolean = false;
	isSubmitted : boolean = false;
	gender_option : string = "male";
	site_option : string = "manual";
	pt_option : number = 1;
	sub_option : number = 1;
	token: string ='';
	member_id: number = 0;
	currentUser: null;
    confirm_password = '';
	keyword= '';
    agree_terms_conditions_checkbox = false;
	currency = "﷼";
	phone_verified = false;
	lat = 21.4858;
	lng = 39.1925;
	ngOnInit(): void {	}

	changeTab(tab: TabItem): void {
		// this.selectedTab = tab;
		this.submittedTab = this.selectedTab;
		let id = this.selectedTab.id;
		let invalid = false;
		const index = this.tabs.findIndex(t => t.id === id);
		const target_index = this.tabs.findIndex(t => t.id === tab.id);

		if (tab.passed || index == target_index-1){
	
			switch (id) {
				case 'site':
					break;
				case 'account':
					invalid = this.mobile['invalid'] 
							|| this.password['invalid']
							|| this.confirmPassword['invalid']
							|| this.email['invalid']
							|| this.national_id['invalid']
							|| this.first_name['invalid']
							|| this.last_name['invalid']
							|| this.agree_terms_conditions['invalid']
							|| this.subscription_day['invalid']
							|| this.dob['invalid'];
					break;
				case 'payment':
					invalid = this.card_number['invalid'] 
							|| this.cvv['invalid']
							|| this.date_month['invalid']
							|| this.date_year['invalid'];
					break;
				default:
					break;
			}
			
			if (!invalid){
				this.tabs[index].passed = true;
				this.selectedTab = tab;
			}
		}
	}
	startJourney(): void{
		this.isStarted = true;
	}
	nextTab(id: string): void{
		const index = this.tabs.findIndex(tab => tab.id === id);
		if (index === -1 ) {
			this.selectedTab = this.tabs[0];
			this.submittedTab = this.tabs[0];
		}else {
			if (index === this.tabs.length - 1) {
				this.isCompleted = true;
			}else{
				if (this.selectedTab.id == 'account'){
					this.signup();
				}
				this.changeTab(this.tabs[index + 1]);
			}
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
			// this.changeTab(this.tabs[index - 1]);
		}
	}
	setGenderOption(option:string){
		this.gender_option = option;
		this.user.gender = this.gender_option;
	}
	setSiteOption(option:string){
		this.site_option = option;
	}
	setBranchOption(option:number){
		console.log(option);
		this.user.default_branch = option;
	}
	setPTOption(option:number){
		this.pt_option = option;
	}
	setSubOption(option:number){
		this.sub_option = option;
	}
	stepPassed(tabId:string){
		const index = this.tabs.findIndex(tab => tab.id === tabId);
		if (index === -1 ) {
			return false;
		}else{
			return this.tabs[index].passed;
		}
	}
	stepSubmitted(tabId:string){
		return this.submittedTab.id == tabId;
	}
	onSearchBranch(searchValue: string = ""): void {  
		this.keyword = searchValue;
		this.branchService.getBranchList(this.user.client_id,this.keyword).subscribe((res) => {
			if (!res) {
				return;
			}
			this.clubs = res['data'];
			this.user.default_branch = this.clubs[0]?.id;
		});
	}
	getProducts(){
		this.branchService.getProductList(this.user.client_id).subscribe((res) => {
			if (!res) {
				return;
			}
			console.log(res);
			res['data'].forEach(element => {
				if (element.type == "subscription"){
					this.subscriptions.push(element);
					// console.log(element);
				}else{
					// console.log(element);
					this.personalTrainings.push(element);
				}
			});
			this.pt_option = this.personalTrainings[0]?.id;
			this.sub_option = this.subscriptions[0]?.id;
		});
	}
	signup(){
		console.log(this.user);
		this.userService.signup(this.user).subscribe((res) => {
			if (res) {
				this.token = res['data']['token'];
				this.member_id = res['data']['id'];
				this.currentUser = res['data'];
				if (this.token) {
						Cookie.setLogin(this.member_id);
						Cookie.setClientId(this.user.client_id);
						this.userService.setToken(this.token);
						this.userService.setClientId(this.user.client_id);
						this.userService.setUser(this.currentUser);
						localStorage.setItem('u_pass', this.user.password);
				}
				// this.isCompleted = true;
				this.isSubmitted = true;
			}
		});
	}

	openConfirmDialog() {
		if (!this.mobile['invalid']){
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.data = {
				title: 'Confirm OTP',
				mobile : this.user.mobile,
			};
			this.dialog.open(ConfirmCodeComponent, dialogConfig)
			.afterClosed()
			.subscribe((status) => {
				if (status) {
					console.log("sstatus",status);
					this.phone_verified = status;
				}
			});
		}
	}
}
