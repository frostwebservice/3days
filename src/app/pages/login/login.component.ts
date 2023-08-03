import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ArticleService } from 'src/app/services/article.service';

import { User } from 'src/app/models/user.model';
import { Cookie } from 'src/app/utils/cookie';
import { environment } from 'src/environments/environment';
// import { MatDialog } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';




@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	providers : [
		UserService,
	]  
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
	returnUrl = '';
	constructor(
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
		// private dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	login(): void {
		// Login
		this.submitting = true;
		console.log('login',this.user);
		this.userService.login(this.user).subscribe((res) => {
				this.submitting = false;
				if (!res) {
						return;
			}
			console.log(res);
			if (res.token !== undefined && res.token !== ""){
				this.goHome(res);
			}
		});
		// this.userService.test(this.user);
	}
	goHome(data: any): void {
		Cookie.setLogin(data.member.id);
		console.log('*******',data.member);
		this.returnUrl = '/profile';
		this.router.navigate([this.returnUrl]);
	}
}
