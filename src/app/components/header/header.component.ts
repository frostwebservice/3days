import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
	isLoggedIn :boolean;
	constructor(
		userService: UserService
	) {
		this.isLoggedIn = userService.getUser()?.token !== "" && userService.getUser()?.token == userService.getToken();	
	}

	toggleNavbar(nF = false) {
		this.tF = nF;
	}
}
