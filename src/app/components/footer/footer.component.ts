import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: 'footer.component.html',
	styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor() { }
	@Input()
	page_name: string = '3 Days'
	ngOnInit(): void {
	}

}
