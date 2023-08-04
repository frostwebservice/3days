import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

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
                    this.router.navigate(['/login']);
                }
            });
      }
}
