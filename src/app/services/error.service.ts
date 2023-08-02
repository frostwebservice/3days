import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Strings } from '../constants/strings.constant';
import { Cookie } from '../utils/cookie';

@Injectable({
  	providedIn: 'root'
})
export class ErrorService {
	// private errorSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
	// public errors$ = this.errorSubject.asObservable();

	// lastError = {
	// 	operation: 'Ready',
	// 	message: 'Unknown Error',
	// 	detail: '',
	// 	statusText: '',
	// 	status: 200
	// };
	// lastTime = new Date().getTime();

	constructor(
		private router: Router,
		// private toast: ToastrService,
		private dialog: MatDialog
	) {}
	// addError(operation: string, error: any) {
	// 	const errorObj = {
	// 	operation,
	// 	message: (error.error && error.error.error) || 'Unknown Error',
	// 	detail: error.message,
	// 	statusText: error.statusText,
	// 	status: error.status
	// 	};

	// 	if (operation === 'GET CONVERT STATUS') {
	// 	return;
	// 	}

	// 	switch (error.status) {
	// 	case 0:
	// 		// Network Error
	// 		if (
	// 		!document.querySelector('.toast-top-center div') &&
	// 		operation !== 'GET NOTIFICATION DELIVERY STATUS'
	// 		) {
	// 		}
	// 		break;
	// 	case 401:
	// 		// Authorization Error (Auth Page & Invalid Token)
	// 		if (this.router.url.indexOf('/login') === 0) {
	// 		// this.toast.error(errorObj.message, Strings.LOGIN, {
	// 		// 	closeButton: true
	// 		// });
	// 		} else {
	// 		// this.toast.error(errorObj.message, Strings.AUTHENTICATION, {
	// 		// 	closeButton: true
	// 		// });
	// 		this.clearData();
	// 		this.router.navigate(['/']);
	// 		}
	// 		break;
	// 	case 402:
	// 		break;
	// 	case 403:
	// 		break;
	// 	case 405:
	// 		break;
	// 	case 406:
	// 		break;
	// 	case 407:
	// 		break;
	// 	case 408:
	// 		break;
	// 	case 409:
	// 		break;
	// 	case 410:
	// 		break;
	// 	default:
	// 		if (Array.isArray(errorObj.message)) {
	// 		errorObj.message.forEach((message) => {
	// 			// this.toast.error(message, errorObj.operation, {
	// 			// closeButton: true
	// 			// });
	// 		});
	// 		} else {
	// 		// this.toast.error(errorObj.message, errorObj.operation, {
	// 		// 	closeButton: true
	// 		// });
	// 		}
	// 		this.errorSubject.next([errorObj, ...this.errorSubject.getValue()]);
	// 	}

	// 	this.lastError = errorObj;
	// 	this.lastTime = new Date().getTime();
	// }

	// showSuccess(message): void {
	// 	// this.toast.success('', message, { closeButton: true });
	// }

	// clearData(): void {
	// 	localStorage.removeItem('token');
	// 	Cookie.setLogout();
	// }

	// clear$(): void {
	// 	this.errorSubject.next([]);
	// }
}
