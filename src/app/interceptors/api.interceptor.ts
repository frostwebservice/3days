import {
	HttpInterceptor,
	HttpHandler,
	HttpEvent,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, pipe } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	private role = '';
	constructor(private userService: UserService) {

	}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (
			req.url.indexOf('https://api.vimeo.com/videos') !== -1 ||
			req.url.indexOf('https://www.googleapis.com/youtube') !== -1
		) {
			return next.handle(req);
		} else {
			if (req.url.indexOf('/assets/i18n') !== -1) {
				return next.handle(req);
			}
			if (!req.headers.has('Content-Type')) {
				if (!req.headers.has('No-Content')) {
					req = req.clone({
						setHeaders: {
							'Content-Type': 'application/json',
							'ngsw-bypass': 'true'
						}
					});
				}
			}
			if (!req.headers.has('No-Auth')) {
				req = req.clone({
					setHeaders: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
						Role: this.role,
						'ngsw-bypass': 'true'
					}
				});
			}
			return next.handle(req).pipe(
				map((event: HttpEvent<any>) => {
					return event;
				}),
				catchError((error: HttpErrorResponse) => {
					return throwError(error);
				})
			);
		}
	}
}
