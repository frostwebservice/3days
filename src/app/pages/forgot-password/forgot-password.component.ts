import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

    constructor(private userService: UserService, private router: Router) {}

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
                }
            });
    }

}
