import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { TabItem } from '../../utils/data.types';
@Component({
	selector: 'app-page-tab',
	templateUrl: 'page-tab.component.html',
	styleUrls: ['page-tab.component.css']
})
export class PageTabComponent{
	@Input('tabs') tabs: TabItem[] = [];
	@Input('disableTabs') disableTabs: TabItem[] = [];
	@Input('selected')
	public set selected(val: TabItem) {
		this._selected = val;
		this.initTab();
	}
	@Input('class') class: string = '';
	@ViewChild('container') container: ElementRef;
	@Output() onChange = new EventEmitter();

	currentIndex = 0;
	_selected: TabItem;
	ngOnChanges(changes): void {
		if (changes.tabs) {
		  	this.initTab();
		}
	}
	initTab(): void {
		if (this._selected) {
			const tabIndex = this.tabs.findIndex((item) => item.id ===  this._selected.id);
			this.currentIndex = tabIndex ? tabIndex : 0;
		}
	}
	changeTab(event: Event, item: TabItem): void {
		this.onChange.emit(item);
	}
	changeTabIndex(index: number): void {
		const item = this.tabs[index];
		this.onChange.emit(item);
	}
	
	isDisableTab(tab): boolean {
		if (tab.id) {
			const index = this.disableTabs.findIndex((item) => item.id === tab.id);
			if (index >= 0) {
				return true;
			}
		}
		return false;
	}
	constructor() { }
}
