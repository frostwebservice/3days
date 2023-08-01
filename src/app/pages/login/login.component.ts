import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Cookie } from 'src/app/utils/cookie';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild('serverFrame') serverWindow: ElementRef;
	user = {
		mobile: '',
		password: '',
		client_id : 0
	};
	// user = {
	// 	email: '',
	// 	password: ''
	// };
	submitting = false;
	loginSubscription: Subscription;
	returnUrl = '';
	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
	}
	login(): void {
		// Login
		this.submitting = true;
		this.userService.login(this.user).subscribe((res) => {
			this.submitting = false;
			if (!res) {
				return;
			}
			// Save the user token and profile information
			this.goHome(res['data']);
		});
	}
	goHome(data: any): void {
		Cookie.setLogin(data.user.id);
		console.log('*******',data.user.id);
		if (
			data.user &&
			data.user.subscription &&
			data.user.subscription.is_failed
		) {
			this.returnUrl = '/profile';
			this.router.navigate([this.returnUrl]);
	
		}
		if (data?.guest_loggin) {
		  	localStorage.setItem('guest_loggin', data.guest_loggin);
		}
		localStorage.setItem('primary_loggin', data.user.is_primary);
		this.userService.setToken(data['token']);
		// this.userService.setProfile(data['user']);
		this.router.navigate([this.returnUrl]);
	}

}
