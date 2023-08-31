import { Title, Meta } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { File } from 'src/app/utils/data.types';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService, Toast } from 'angular2-toaster';

import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ReferralCodeComponent } from 'src/app/components/referral-code/referral-code.component';


@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers : [
        
    ]  
})
export class Profile {

    pitems = [
        {id:'personal-data',label: 'Personal_data',iconclass: 'j-icon-active-person',href:'/personal-data'},
        {id:'club-branches',label: 'Club branches',iconclass: 'j-icon-active-marker',href:'/branches'},
        {id:'referral-code',label: 'Promotional code',iconclass: 'j-icon-active-two-person',href:'/referral-code'},
        {id:'financial-operations',label: 'financial operations',iconclass: 'j-icon-active-cash',href:'/financial-operations'},
        {id:'technical-support',label: 'Technical support',iconclass: 'j-icon-receiver',href:'https://wa.me/966920012527?text=Hello%20there'}
        // {id:'privacy-policy',label: 'privacy policy',iconclass: 'j-icon-capman',href:'/privacy-policy'},
        // {id:'terms-conditions',label: 'Terms and conditions',iconclass: 'j-icon-file',href:'/terms-conditions'},
    ];
    constructor(
        private title: Title, private meta: Meta,
        private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
        private loadingService: LoaderService,
        private dialog: MatDialog,
		private toasterService: ToasterService,
    ) {
        this.title.setTitle('Profile - 3 Days');
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'Profile - 3 Days',
            },
        ]);
        this.loadingService.setLoading(true);
        this.current_user_profile = this.userService.getUser();
		this.userService.getProfile().then((res) => {
			this.loadingService.setLoading(false);
			if (!res) {
				console.log('get_non_profile');
		        return;
		    }
            this.imageUrl = res.data.photo;
		}).catch((err) => {
		    console.log(err);
            this.imageUrl = "./assets/img/manavatar.png";
		});
        this.loadingService.setLoading(false);
    }
   
    current_user_profile;
    imageUrl:string = "./assets/img/manavatar.png";
    unreadNotifications:boolean = false;
    openReferralCodeDialog() {
        const dialogConfig = new MatDialogConfig();      
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
        this.getNotificationStatus();
    }
    getNotificationStatus(){
        this.userService.notificationStatus()
        .subscribe((res) => {
            this.unreadNotifications = res?.data?.unreadNotifications;
        });
    }
    onImageSelected(event: any) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    this.imageUrl = e.target.result;
                    const newFile: File = {
                        uri: this.imageUrl,
                        type: file.type,
                        name: file.name,
                        content: file
                    };
                    console.log(newFile);
                    this.userService.updateMemberImage(file)
                        .subscribe((res) => {
                            if (res.status){
                                const toast: Toast = {
                                    type: 'success',
                                    title: 'Success',
                                    body: "Profile photo updated",
                                };
                                this.toasterService.pop(toast);
                            }else{
                                const toast: Toast = {
                                    type: 'error',
                                    title: 'Update photo failed',
                                    body: res.data,
                                };
                                this.toasterService.pop(toast);
                            }
                        }
                    );
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
