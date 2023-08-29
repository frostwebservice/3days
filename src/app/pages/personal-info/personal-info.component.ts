import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
	selector: 'app-personal-info',
	templateUrl: './personal-info.component.html',
	styleUrls: ['./personal-info.component.css']
})
export class PersonalInfo implements OnInit {

    current_user_data = {
		arabic_name: "User",
		english_name: "User",
		national_id: "00000000000",
		mobile: "123456789",
		default_branch: 1,
		email: "sample@test.com",
		dob: "2000-01-01"
	};
	submitting = false;
	constructor(
		private userService: UserService,
        private loadingService: LoaderService,
		private toasterService: ToasterService,
	) {
        this.loadingService.setLoading(true);
		this.userService.getProfile().then((res) => {
			this.loadingService.setLoading(false);
            if (!res) {
                console.log('get_non_profile_info');
                return;
            }
            this.current_user_data = {...res.data};
        });
	}

	ngOnInit(): void {}

	update(){
		this.submitting = true;
		this.userService.updateProfile(this.current_user_data)
		.subscribe((res) => {
			this.submitting = false;
			if (res.status){
				const toast: Toast = {
					type: 'success',
					title: 'Success',
					body: res.message,
				};
				this.toasterService.pop(toast);
			}else{
				const toast: Toast = {
					type: 'error',
					title: 'Update failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
			}
		});
	}
}
