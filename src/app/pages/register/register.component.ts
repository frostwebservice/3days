import { Component, OnInit } from '@angular/core';
import { TabItem } from 'src/app/utils/data.types';
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor() { }
	tabs: TabItem[] = [
		{ icon: '', label: 'الجنس', id: 'gender' },
		{ icon: '', label: 'الموقع', id: 'site' },
		{ icon: '', label: 'البحث عن نادي', id: 'find a club' },
		{ icon: '', label: 'Image', id: 'image' }
	];
	selectedTab: TabItem = this.tabs[0];

	ngOnInit(): void {}
	changeTab(tab: TabItem): void {
		this.selectedTab = tab;
	}

}
