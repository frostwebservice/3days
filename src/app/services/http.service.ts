import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Strings } from '../constants/strings.constant';
import { ErrorService } from './error.service';

@Injectable({
  	providedIn: 'root'
})
export class HttpService {
	public server = environment.api;
	constructor(private errorService: ErrorService) {}

	handleError<T>(
		operation = 'Server Connection',
		result?: T,
		returnError = false
	) {
		return (error: any): Observable<T> => {
			this.errorService.addError(operation, error);
			if (returnError) {
				return of({ ...error.error, statusCode: error.status } as T);
			} else {
				return of(result as T);
			}
		};
	}

	handleSuccess<T>(operation = Strings.REQUEST_SUCCESS, result?: T) {
		return (): Observable<T> => {
		console.log(operation);
		this.errorService.showSuccess(operation);
		return of(result as T);
		};
	}
}
