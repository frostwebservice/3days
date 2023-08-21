import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { Branch } from '../models/branch.model';
import { BOOKING, BRANCH } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends HttpService {

	constructor(
		private httpClient: HttpClient, 
		errorService: ErrorService
	) {
		super(errorService);
	}
	public getBranchDetail(branch_id: number): Observable<boolean> {
		const reqHeader = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'No-Auth': 'True'
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_BRANCH_DETAILS,
				{ branch_id: branch_id },
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res['status']),
				catchError(this.handleError('Get Branch Detail', false))
			);
	}
	public getBranchList(client_id:number,keyword: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'No-Auth': 'True'
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_BRNACH_LIST,
				{ 
					client_id: client_id ,
					keyword: keyword 
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('Get Branches', false))
			);
	}
	public getProductList(client_id:number): Observable<any> {
		const reqHeader = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'No-Auth': 'True'
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_PRODUCT_LIST,
				{ 
					client_id: client_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('Get products', false))
			);
	}
	public getBranchAllPTSessions(branch_id:number,session_date: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_ALL_PT_SESSIONS_PER_BRANCH,
				{ 
					branch_id: branch_id ,
					session_date: session_date 
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('Get ALL PT SESSIONS PER BRNACH', false))
			);
	}
	public getSubscriptionSessions(branch_id:number,session_date: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_SUBSCRIPTIONS_PER_BRANCH,
				{ 
					branch_id: branch_id ,
					session_date: session_date 
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('GET MEMBER SUBSCRIPTION SESSIONS PER BRANCH', false))
			);
	}
	public getMemberPTSessions(branch_id:number,session_date: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_PTS_PER_BRANCH,
				{ 
					branch_id: branch_id ,
					session_date: session_date 
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('Get MEMBER PT SESSIONS PER BRNACH', false))
			);
	}
	public getMemberSubscriptions(): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_MEMBER_SUBSCRIPTIONS,
				{},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('GET MEMBER SUBSCRIPTIONS', false))
			);
	}
	public getMemberBookings(branch_id:number): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.GET_MEMBER_BOOKINGS,
				{},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('GET MEMBER BOOKINGS', false))
			);
	}
	public cancelBooking(booking_id:number): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.CANCEL_BOOKING,
				{
					booking_id:booking_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('CANCEL BOOKING', false))
			);
	}
	public bookSession(session_id:number): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.BOOK_SESSION,
				{
					class_session_id:session_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('BOOK SESSION', false))
			);
	}
	public getSessionsSeats(session_id:number): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.GET_SESSIONS_SEATS,
				{
					class_session_id:session_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('AVAILABLE SEATS', false))
			);
	}
	public rateBooking(review): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.SESSION_RATING,review,
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('RATE BOOKING', false))
			);
	}
	public suspendSubscription(data: { subscription_id: number; suspension_days: number; suspension_date: string; }): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.SUSPEND_SUBSCRIPTION,data,
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('SUSPEND SUBSCRIPTION', false))
			);
	}
	
	public cancelSubscription(subscription_id: number): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.CANCEL_SUBSCRIPTION,
				{
					subscription_id : subscription_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('CANCEL SUBSCRIPTION', false))
			);
	}

	public reactivateSubscription(subscription_id): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.REACTIVE_SUBSCRIPTION,
				{
					subscription_id : subscription_id
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('REACTIVE SUBSCRIPTION', false))
			);
	}

	public buySubscription(subscription): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.BUY_SUBSCRIPTION,subscription,
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('BUY SUBSCRIPTION', false))
			);
	}
	public validateBuySubscription(subscription): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.VALIDATE_BUY_SUBSCRIPTION,subscription,
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('BUY SUBSCRIPTION', false))
			);
	}
	public checkCoupon(product_id:number,coupon_code: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + BOOKING.CHECK_COUPON,
				{ 
					coupon_code: coupon_code ,
					product_id: product_id 
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('CEHCK COUPON', false))
			);
	}
	public setTransaction(data): void {
        localStorage.setItem('transaction', JSON.stringify(data));
    }
	public getTransaction(): any {
        return localStorage.getItem('transaction');
    }

}
