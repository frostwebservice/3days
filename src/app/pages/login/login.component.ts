import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

import { environment } from 'src/environments/environment';
import { Cookie } from 'src/app/utils/cookie';
import { Lang } from 'src/app/utils/data.types';
import { Subscription } from 'rxjs';
import { LANG_OPTIONS } from 'src/app/constants/variable.constants';
import { LangService } from 'src/app/services/lang.service';

// import { MatDialog } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	// providers : [
	// 	UserService,
	// ]  
})
export class LoginComponent implements OnInit {
	@ViewChild('serverFrame') serverWindow: ElementRef;
	user = {
		mobile: '',
		password: '',
		client_id : 3,
		preferred_language : 'en',
	};
	// user = {
	// 	email: '',
	// 	password: ''
	// };
	submitting = false;
	returnUrl = '';
	loading = false;
    languages: Lang[] = LANG_OPTIONS;
    languageSubscription: Subscription;
    selectedLanguage: Lang = null;
    
	constructor(
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
        private langService: LangService
	) { }

	ngOnInit(): void {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login( byEnter:boolean = false): void {
		// Login
		this.submitting = true;
		console.log('login',this.user);
		let _user = {...this.user};
		if (byEnter){
			this.user.client_id = this.user.client_id - 1;
		}
		this.userService.login(_user).subscribe((res) => {
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
	changeLang(lang: Lang): void {
        this.langService.changeLang(lang.code);
    }
	goHome(data: any): void {
		Cookie.setLogin(data.member.id);
		Cookie.setClientId(this.user.client_id);

		this.userService.setUser(data.member);
		this.userService.setToken(data.token);
		this.userService.setClientId(this.user.client_id);
		localStorage.setItem('u_pass', this.user.password);
		
		console.log('*******',data.member);
		this.returnUrl = '/profile';
		this.router.navigate([this.returnUrl]);
	}
}
