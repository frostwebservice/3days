import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})
export class HeaderComponent {

    @Input()
    page_name: string = '3 Days'
	public tF:boolean = false;
	public temp:string = "public";
	constructor() {	}

	toggleNavbar(nF = false) {
		this.tF = nF;
	}
}
