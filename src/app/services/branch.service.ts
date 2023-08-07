import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { Branch } from '../models/branch.model';
import { BRANCH } from '../constants/api.constant';

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
	public getProductList(client_id:number,keyword: string = ""): Observable<any> {
		const reqHeader = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'No-Auth': 'True'
		});
		return this.httpClient
			.post(
				this.server + BRANCH.GET_PRODUCT_LIST,
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
				catchError(this.handleError('Get products', false))
			);
	}
}