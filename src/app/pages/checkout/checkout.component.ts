import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/utils/data.types';
@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class Checkout implements OnInit {

	constructor() { }
	members: Member[] = [
		{id:1, name:"Jack"},
		{id:2, name:"Susana"},
		{id:3, name:"William"},
		{id:4, name:"Holley"},
		{id:5, name:"Purey"},
		{id:6, name:"Billy"},
	];
	ngOnInit(): void {
	}

}
