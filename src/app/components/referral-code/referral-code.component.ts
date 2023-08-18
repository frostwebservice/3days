import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
	selector: 'app-referral-code',
	templateUrl: './referral-code.component.html',
	styleUrls: ['./referral-code.component.css']
})
export class ReferralCodeComponent implements OnInit {
	referral_code="3d78021";
	constructor(
		private dialogRef: MatDialogRef<ReferralCodeComponent>,
        private userService: UserService,
        private loadingService: LoaderService,
		private clipboard: Clipboard,
		private toasterService: ToasterService,
        @Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.loadingService.setLoading(true);
		this.userService.getProfile().then((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				console.log('get_non_profile');
		        return;
		    }
			this.referral_code = data.code;
			data.count = res.data.number_of_use_referral_code;

		}).catch((err) => {
		    console.log(err);
		});
	}
	copyToClipboard() {
		this.clipboard.copy(this.referral_code);
		this.dialogRef.close();
		const toast: Toast = {
			type: 'success',
			title: 'Copy to clipboard',
			body: "Your referral code : " + this.referral_code + " is copied to clipboard",
		};
		this.toasterService.pop(toast);
	}
	ngOnInit(): void {
	}

}
