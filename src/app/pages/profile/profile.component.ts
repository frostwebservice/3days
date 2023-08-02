import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
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
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Profile - 3 Days')
        this.meta.addTags([
        {
            property: 'og:title',
            content: 'Profile - 3 Days',
        },
        ])
    }
   
    ngOnInit() {     
    }  
}
