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
	
}
