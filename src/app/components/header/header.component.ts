import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Cookie } from 'src/app/utils/cookie';
import { ActivatedRoute, Router } from '@angular/router';

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
	isLoggedIn :boolean = false;
	user :{password:string;email:string} = {password:"", email:""};
	constructor(
		private router: Router,
		private userService: UserService
	) {
		this.isLoggedIn = this.userService.getUser()?.id > 0 && this.userService.getToken() !== "";	

	}

	toggleNavbar(nF = false) {
		this.tF = nF;
	}
	logout(event: Event): void {
		event && event.preventDefault();
		this.user.email = this.userService.getUser()?.email; 
		this.user.password = this.userService.getPassword(); 

		this.userService.logout(this.user).subscribe(
			() => {
				// LOGOUT COOKIE SETTING
				Cookie.setLogout();
				this.userService.clearLocalStorageItem('token');
				this.userService.clearLocalStorageItem('clientId');
				this.userService.clearLocalStorageItem('user');
				this.userService.clearLocalStorageItem('u_pass');

				this.router.navigate(['/']);
			},
			() => {
				console.log('LOG OUT FAILURE');
			}
		);
	}
}
