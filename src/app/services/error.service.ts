import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Strings } from '../constants/strings.constant';
import { Cookie } from '../utils/cookie';
// import { DetailErrorComponent } from '../components/detail-error/detail-error.component';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {
	private errorSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
	public errors$ = this.errorSubject.asObservable();

	lastError = {
		operation: 'Ready',
		message: 'Unknown Error',
		detail: '',
		statusText: '',
		status: 200
	};
	lastTime = new Date().getTime();

	constructor(
		private router: Router,
		// private toast: ToastrService,
		private dialog: MatDialog
	) {}
	addError(operation: string, error: any) {
		const errorObj = {
			operation,
			message: (error.error && error.error.error) || 'Unknown Error',
			detail: error.message,
			statusText: error.statusText,
			status: error.status
		};

		if (operation === 'GET CONVERT STATUS') {
			return;
		}

		switch (error.status) {
			case 0:
				// Network Error
				// if (
				// 	!document.querySelector('.toast-top-center div') &&
				// 	operation !== 'GET NOTIFICATION DELIVERY STATUS'
				// ) {
				// 	this.toast.error(
				// 		Strings.NETWORK_ERROR_CONTENT,
				// 		Strings.NETWORK_ERROR_TITLE,
				// 		{
				// 			positionClass: 'toast-top-center',
				// 			timeOut: 360000
				// 		}
				// 	);
				// }
				console.log(Strings.NETWORK_ERROR_CONTENT);
				break;
			case 401:
				// Authorization Error (Auth Page & Invalid Token)
				// if (this.router.url.indexOf('/login') === 0) {
				// 	this.toast.error(errorObj.message, Strings.LOGIN, {
				// 		closeButton: true
				// 	});
				// } else {
				// 	this.toast.error(errorObj.message, Strings.AUTHENTICATION, {
				// 		closeButton: true
				// 	});
				// 	this.clearData();
				// 	this.router.navigate(['/']);
				// }
				console.log(errorObj.message);
				break;
			default:
				// if (Array.isArray(errorObj.message)) {
				// 	errorObj.message.forEach((message) => {
				// 		this.toast.error(message, errorObj.operation, {
				// 			closeButton: true
				// 		});
				// 	});
				// } else {
				// 	this.toast.error(errorObj.message, errorObj.operation, {
				// 		closeButton: true
				// 	});
				// }
				this.errorSubject.next([errorObj, ...this.errorSubject.getValue()]);
				console.log(errorObj.message);
		}

		this.lastError = errorObj;
		this.lastTime = new Date().getTime();
	}

	showSuccess(message): void {
		// this.toast.success('', message, { closeButton: true });
		console.log("SUCCESS");
	}

	clearData(): void {
		localStorage.removeItem('token');
		Cookie.setLogout();
	}

	clear$(): void {
		this.errorSubject.next([]);
	}
}
