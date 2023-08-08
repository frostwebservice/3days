import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
	selector: 'app-terms-conditions',
	templateUrl: './terms-conditions.component.html',
	styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditons implements OnInit {

	constructor(
		private userService: UserService,
        private loadingService: LoaderService
	) {
		this.loadingService.setLoading(true);
		this.userService.getTermsConditions().then((res) => {
            if (!res) {
                console.log('get_non_terms_conditions');
                return;
            }
			this.termsConditions = res;
            this.loadingService.setLoading(false);
        });
	}
	termsConditions;

	ngOnInit(): void {

	}

}
