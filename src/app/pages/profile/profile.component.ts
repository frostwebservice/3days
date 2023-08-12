import { Title, Meta } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Cookie } from 'src/app/utils/cookie';
import { LoaderService } from 'src/app/services/loader.service';

import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ReferralCodeComponent } from 'src/app/components/referral-code/referral-code.component';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers : [
        
    ]  
})
export class Profile {
    pitems = [
        {id:'personal-data',label: 'Personal data',iconclass: 'j-icon-active-person',href:'/personal-data'},
        {id:'club-branches',label: 'Club branches',iconclass: 'j-icon-marker',href:'/branches'},
        {id:'referral-code',label: 'Promotional code',iconclass: 'j-icon-active-two-person',href:'/referral-code'},
        {id:'financial-operations',label: 'financial operations',iconclass: 'j-icon-active-cash',href:'/financial-operations'},
        {id:'technical-support',label: 'Technical support',iconclass: 'j-icon-receiver',href:'/profile'},
        {id:'privacy-policy',label: 'privacy policy',iconclass: 'j-icon-capman',href:'/privacy-policy'},
        {id:'terms-conditions',label: 'Terms and conditions',iconclass: 'j-icon-file',href:'/terms-conditions'},
    ];
    constructor(
        private title: Title, private meta: Meta,
        private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
        private loadingService: LoaderService,
        private dialog: MatDialog,
        // private toastr: ToastrService
    ) {
            this.loadingService.setLoading(true);
            this.title.setTitle('Profile - 3 Days');
            this.meta.addTags([
                {
                    property: 'og:title',
                    content: 'Profile - 3 Days',
                },
            ]);
            this.userService.getProfile().then((res) => {
                if (!res) {
                    console.log('get_non_profile');
                    return;
                }
                this.current_user_profile = res.data;
                console.log(res);
                this.loadingService.setLoading(false);

            }).catch((err) => {
                console.log(err);
            });
    }
   
    current_user_profile;
     openReferralCodeDialog() {
        const dialogConfig = new MatDialogConfig();

        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Referral Code',
            code : this.current_user_profile.referral_code,
            count : this.current_user_profile.number_of_use_referral_code
        };
   
        const dialogRef = this.dialog.open(ReferralCodeComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );    
    }
    doActive(hr): void{
        if (hr == "/referral-code"){
            this.openReferralCodeDialog();
        }else{
            this.router.navigate([hr]);
        }
    }
    ngOnInit(): void {
    }
}
