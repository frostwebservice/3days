import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-class-detail',
	templateUrl: './class-detail.component.html',
	styleUrls: ['./class-detail.component.css']
})
export class ClassDetail implements OnInit {

	constructor() { }
	openDays = ['11-06-2023','12-06-2023','15-06-2023','18-06-2023','19-06-2023','23-06-2023','27-06-2023',];
	openTimes = ['13:00 - 14:00','15:00 - 16:00','17:00 - 19:00','19:00 - 20:00','21:00 - 22:00'];
	ngOnInit(): void {
	}

}
