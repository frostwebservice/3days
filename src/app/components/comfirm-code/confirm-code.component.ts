import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';
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
			}
		});
	}
	checkOTP(){
		this.submitting = true;
		this.userService.verifyOTP(this.user)
		.subscribe((status) => {
			if (status) {
				this.isSent = true;
			}
			this.phone_verified = status;
			this.dialogRef.close(this.phone_verified);
			this.submitting = false;
		});
	}
	ngOnInit(): void {
	}

}
