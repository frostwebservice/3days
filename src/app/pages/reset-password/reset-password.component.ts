import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    newData = {
        mobile: '',
        otp: '',
        password: '',
        client_id: 0
    };

    confirm_password = '';

    loading = false;
  
    submitted = false;

    constructor(    
        private router: Router,
        private route: ActivatedRoute,
		private toasterService: ToasterService,
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.newData.mobile = this.route.snapshot.queryParams['resetMobile'];
    }

    resetPassword(): void {
        this.loading = true;
        const otp = this.newData.otp.trim();
        this.userService
            .resetPassword({ ...this.newData, otp })
            .subscribe((status) => {
                this.loading = false;
                if (status) {
                    const toast: Toast = {
                        type: 'success',
                        title: 'Success',
                        body: 'Reset password successfully',
                    };
                    this.toasterService.pop(toast);
                    this.router.navigate(['/login']);
                }else{
                    const toast: Toast = {
                        type: 'error',
                        title: 'Oops',
                        body: "Reset password failed",
                    };
                    this.toasterService.pop(toast);
                }
            });
      }
}
