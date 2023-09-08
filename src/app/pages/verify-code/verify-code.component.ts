import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
    selector: 'app-verify-code',
    templateUrl: 'verify-code.component.html',
    styleUrls: ['verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
    loading = false;
    submitted = false;
    submitting = false;

	user = {
        mobile:'',
        client_id : 3,
		otp: ''
		
	};

    constructor(
        private userService: UserService,
        private router: Router,
		private toasterService: ToasterService,
        private activatedRoute: ActivatedRoute
    ) {

        this.activatedRoute.queryParams.subscribe(params => {
            const mobileNumber = params['resetMobile'];
            this.user.mobile = mobileNumber;
        });
    }

    ngOnInit(): void { }

    sendVerifyCode(): void {
        this.loading = true;
        this.submitting = true;

        this.userService
            .verifyOTP(this.user)
            .subscribe((status) => {
                this.loading = false;
                this.submitting = false;
                if (status) {
                    this.router.navigate(['/reset-password'], {
                        queryParams: { resetMobile: this.user.mobile }
                    });
                    const toast: Toast = {
                        type: 'success',
                        title: 'Success',
                        body: "Verified successfully",
                    };
                    this.toasterService.pop(toast);
                }else{
                    const toast: Toast = {
                        type: 'error',
                        title: 'Oops',
                        body: "Verification failed",
                    };
                    this.toasterService.pop(toast);
                }
            });
    }

}
