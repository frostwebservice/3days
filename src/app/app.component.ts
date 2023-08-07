import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { LangService } from './services/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LangRegex, LANGUAGES } from './constants/variable.constants';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '3 Days';

	constructor( 
		private loadingService: LoaderService,
		private langService: LangService,
		private translateService: TranslateService,
	) {
		this.langSubscription && this.langSubscription.unsubscribe();
		this.langSubscription = this.langService.language$.subscribe((lang) => {
			this.translateService.use(lang || 'en');
		});
	
		this.translateService.addLangs(LANGUAGES);
		this.translateService.setDefaultLang('en');
		const browserLang = this.translateService.getBrowserLang();

		const storageLang = localStorage.getItem('lang');
		const lang = storageLang && storageLang.match(LangRegex)
			? storageLang
			: browserLang.match(/en|ar/)
			? browserLang
			: 'en';
		this.langService.changeLang(lang);
	}
	langSubscription: Subscription;
	// async ngAfterViewInit() {
	// 	setTimeout(() => {
	// 		this.loadingService.setLoading(false);
	// 	},1000);
	// }
}