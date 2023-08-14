import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
    selector: 'app-forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    loading = false;
    submitted = false;
    submitting = false;

	user = {
		mobile: '',
		client_id : 3
	};

    constructor(
        private userService: UserService,
        private router: Router,
		private toasterService: ToasterService
    ) {}

    ngOnInit(): void { }

    sendResetCode(): void {
        this.loading = true;
        this.submitting = true;

        this.userService
            .requestResetPassword(this.user)
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
                        body: "Reset password request sent successfully",
                    };
                    this.toasterService.pop(toast);
                }else{
                    const toast: Toast = {
                        type: 'error',
                        title: 'Oops',
                        body: "Reset password request send failed",
                    };
                    this.toasterService.pop(toast);
                }
            });
    }

}
