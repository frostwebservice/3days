import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { User } from 'src/app/models/user.model';
// import { UserService } from 'src/app/services/user.service';
import { ArticleService } from 'src/app/services/article.service';

import { User } from 'src/app/models/user.model';
// import { MatDialog } from '@angular/material/dialog';
import { Cookie } from 'src/app/utils/cookie';
// import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';




@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	providers : [
		// UserService,
		ArticleService
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
	article;
	returnUrl = '';
	constructor(
		// private userService: UserService,
		private articleService: ArticleService,
		// private route: ActivatedRoute,
		// private router: Router,
		// private dialog: MatDialog
	) { }

	ngOnInit(): void {
	}
	getArticles()    
    {    
		this.article=this.articleService.getArticles()    
    }  
	login(): void {
		// Login
		this.getArticles();
		this.submitting = true;
		console.log('login',this.user);
		// this.userService.login(this.user).subscribe((res) => {
			// 	this.submitting = false;
			// 	if (!res) {
				// 		return;
		// 	}
		// 	this.goHome(res['data']);
		// });
		// this.userService.test(this.user);
	}
	goHome(data: any): void {
		Cookie.setLogin(data.user.id);
		console.log('*******',data.user.id);
	}
}
