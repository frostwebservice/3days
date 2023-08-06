import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '3 Days';

	constructor( private loadingService: LoaderService) {
	}

	async ngAfterViewInit() {
		setTimeout(() => {
			this.loadingService.setLoading(false);
		},1000);
	}
}