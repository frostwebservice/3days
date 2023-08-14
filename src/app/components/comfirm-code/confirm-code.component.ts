import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService, Toast } from 'angular2-toaster';
@Component({
		selector: 'app-confirm-code',
		templateUrl: './confirm-code.component.html',
		styleUrls: ['./confirm-code.component.css']
})
	export class ConfirmCodeComponent implements OnInit {
	user = {
		mobile: '',
		otp: '',
		client_id : 3,
	};
	isSent : boolean = false;
	submitting : boolean = false;
	phone_verified : boolean = false;
	constructor(
		private userService: UserService,
		private loaderService: LoaderService,
		private toasterService: ToasterService,
		private dialogRef: MatDialogRef<ConfirmCodeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.user.mobile = data.mobile;
		this.sendOTP(false);
	}
	sendOTP(resend:boolean = false){
		this.userService.sendOTP(this.user)            
		.subscribe((status) => {
			if (status) {
				if (resend){
					this.isSent = true;
				}
				const toast: Toast = {
					type: 'success',
					title: 'Success',
					body: 'Send OTP successfully',
				};
				this.toasterService.pop(toast);
			}else{
				const toast: Toast = {
					type: 'error',
					title: 'Opps',
					body: 'Something went wrong',
				};
				this.toasterService.pop(toast);
			}
		});
	}
	checkOTP(){
		this.submitting = true;
		this.userService.verifyOTP(this.user)
		.subscribe((status) => {
			this.submitting = false;
			if (status) {
				this.isSent = true;
				const toast: Toast = {
					type: 'success',
					title: 'Success',
					body: 'Phone number verfied successfully',
				};
				this.toasterService.pop(toast);
			}else{
				const toast: Toast = {
					type: 'error',
					title: 'Oops',
					body: 'Phone number verfication failed',
				};
				this.toasterService.pop(toast);
			}
			this.phone_verified = status;
			this.dialogRef.close(this.phone_verified);
		});
	}
	ngOnInit(): void {
	}

}
