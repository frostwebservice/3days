import { Title, Meta } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Cookie } from 'src/app/utils/cookie';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers : [
        
    ]  
})
export class Profile {
    pitems = [
        {id:'personal-data',label: 'البيانات الشخصية',iconclass: 'j-icon-active-person',href:'/personal-data'},
        {id:'club-branches',label: 'أفرع النادي',iconclass: 'j-icon-marker',href:'/branches'},
        {id:'referral-code',label: 'الكود الترويجي',iconclass: 'j-icon-active-two-person',href:'/profile'},
        {id:'financial-operations',label: 'العمليات المالية',iconclass: 'j-icon-active-cash',href:'/financial-operations'},
        {id:'technical-support',label: 'الدعم الفني',iconclass: 'j-icon-receiver',href:'/profile'},
        {id:'privacy-policy',label: 'سياسة الخصوصية',iconclass: 'j-icon-capman',href:'/privacy-policy'},
        {id:'terms-conditions',label: 'الشروط والاحكام',iconclass: 'j-icon-file',href:'/terms-conditions'},
    ];
    constructor(
        private title: Title, private meta: Meta,
        private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
        private loadingService: LoaderService,
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
    ngOnInit() {     
    }  
}
