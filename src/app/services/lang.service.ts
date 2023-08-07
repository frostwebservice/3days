import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LangService {
	lang: BehaviorSubject<string> = new BehaviorSubject(null);
	language$ = this.lang.asObservable();

	constructor() {}

	/**
	 * Emit the language code
	 * @param code: country code for language
	 */
	changeLang(code: string = "en"): void {
		localStorage.setItem('lang', code);
		this.lang.next(code);
	}
}
