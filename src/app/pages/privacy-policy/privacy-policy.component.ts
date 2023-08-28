import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
	selector: 'app-privacy-policy',
	templateUrl: './privacy-policy.component.html',
	styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicy implements OnInit {

	constructor(
		private userService: UserService,
		private loadingService: LoaderService
	) { 
		// this.loadingService.setLoading(true);
		// this.userService.getPrivacyPolicy().then((res) => {
        //     if (!res) {
        //         console.log('get_non_privacy_policy');
        //         return;
        //     }
		// 	this.policy = res.policy;
        //     this.loadingService.setLoading(false);
        // });
	}
	// policy;

	ngOnInit(): void {
	}

}
