import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader.service';
@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    constructor(
        private loadingService: LoaderService
    ) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.loadingService.setLoading(false);
        }, 1000);
    }

}
