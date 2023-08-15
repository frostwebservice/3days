import { Component,OnDestroy,Renderer2 } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { LangService } from './services/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LangRegex, LANGUAGES } from './constants/variable.constants';
import {ToasterConfig} from 'angular2-toaster';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '3 Days';
	lang = 'en';
	public toasterConfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-bottom-right', // Default toast position
        timeout: 5000, // Default toast timeout in milliseconds
    });
	constructor( 
		private loadingService: LoaderService,
		private langService: LangService,
		private translateService: TranslateService,
		private renderer: Renderer2,
	) {
		this.langSubscription && this.langSubscription.unsubscribe();
		this.langSubscription = this.langService.language$.subscribe((lang) => {
			this.translateService.use(lang || 'en');
		});
	
		this.translateService.addLangs(LANGUAGES);
		this.translateService.setDefaultLang('en');
		const browserLang = this.translateService.getBrowserLang();

		const storageLang = localStorage.getItem('lang');
		this.lang = storageLang && storageLang.match(LangRegex)
			? storageLang
			: browserLang.match(/en|ar/)
			? browserLang
			: 'en';
		this.langService.changeLang(this.lang);
		
		this.renderer.addClass(document.body, 'j-lang-'+this.lang);
	}
	langSubscription: Subscription;

	ngOnDestroy(): void {
		this.langSubscription && this.langSubscription.unsubscribe();
		this.renderer.removeClass(document.body, 'j-lang-en');
		this.renderer.removeClass(document.body, 'j-lang-ar');
	}
}