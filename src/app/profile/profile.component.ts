import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Cookie } from 'src/app/utils/cookie';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(
        private userService: UserService,
		private router: Router,
		private route: ActivatedRoute,
    ) { 
        this.userService.getProfile().then((res) => {
            if (!res) {
                console.log('get_non_profile');
                return;
            }
            this.current_user_data = res;
            console.log(res);
        });
    }

    current_user_data;

    ngOnInit(): void {
    }

}
