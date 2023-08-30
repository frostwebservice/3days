import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AUTH,PROFILE } from '../constants/api.constant';
import { Account, User } from '../models/user.model';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpService {
    profile: BehaviorSubject<User> = new BehaviorSubject(new User());
    profile$: Observable<User> = this.profile.asObservable();
  
    accounts: BehaviorSubject<any> = new BehaviorSubject(null);
    accounts$: Observable<any> = this.accounts.asObservable();
  
    constructor(
        private httpClient: HttpClient, 
        errorService: ErrorService
    ) {
        super(errorService);
    }

    public register(): any {}

    // public login(user: { email: string; password: string }): Observable<any> {
    public login(user: { mobile: string; password: string ;client_id: number}): Observable<any> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
            .post(this.server + AUTH.SIGNIN, JSON.stringify(user), {
                headers: reqHeader
            })
            .pipe(
                map((res) => res),
                // catchError(this.handleError('SIGNIN REQUEST'))
            );
    }
    public signup(user: any): any {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
            .post(this.server + AUTH.SIGNUP, JSON.stringify(user), {
                headers: reqHeader
            })
            .pipe(
                map((res) => res),
                catchError(this.handleError('SIGNUP REQUEST', null))
            );
    }

    /**
     * LOG OUT -> CALL API
     */
    public logout(user: { password: string ;email: string}): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });   
        return this.httpClient
        .post(this.server + AUTH.LOG_OUT, JSON.stringify(user), {
                headers: reqHeader
            }).pipe(
                map((res) => res['status']),
                catchError(this.handleError('LOG OUT', false))
            );
    }
    public requestResetPassword(user : {mobile : string; client_id: number}): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
        .post(
            this.server + AUTH.SEND_OTP,
            JSON.stringify(user),
            {
                headers: reqHeader
            }
        )
        .pipe(
            map((res) => res['status']),
            catchError(this.handleError('REQUEST RESET PASSWORD', false))
        );
    }
    public resetPassword(requestData: { mobile: string ; password: string; otp: string; client_id: number}): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
        .post(this.server + AUTH.RESET_PASSWORD, JSON.stringify(requestData), {
            headers: reqHeader
        })
        .pipe(
            map((res) => res['status']),
            catchError(this.handleError('RESET PASSWORD', false))
        );
    }

    public sendOTP(user : {mobile : string; client_id: number}): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
        .post(
            this.server + AUTH.SEND_OTP,
            JSON.stringify(user),
            {
                headers: reqHeader
            }
        )
        .pipe(
            map((res) => res['status']),
            catchError(this.handleError('SEND OTP', false))
        );
    }
    public verifyOTP(user : {mobile : string; client_id: number; otp:string;}): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
        .post(
            this.server + AUTH.VERIFY_OTP,
            JSON.stringify(user),
            {
                headers: reqHeader
            }
        )
        .pipe(
            map((res) => res['status']),
            catchError(this.handleError('VERIFY OTP', false))
        );
    }
    public isAuthenticated(): boolean {
        if (localStorage.getItem('token') != null) {
            return true;
        } else {
            return false;
        }
    }
    public setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    public setClientId(clientId: number): void {
        localStorage.setItem('clientId', clientId.toString());
    }
    public getClientId():number {
        return Number(localStorage.getItem('clientId'));
    }
    public setUser(user: User): any {
        localStorage.setItem('user', JSON.stringify(user));
    }
    public getToken(): any {
        return localStorage.getItem('token');
    }
    public getUser(): any {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return {};
        }
    }
    public getDefaultBranchId():number{
        let user = this.getUser();
        let branch_id :number = Number(user?.default_branch);
        return branch_id; 
    }
    public setDefaultBranchId(dbid:number){
        let user = this.getUser();
        user.default_branch = dbid;
        this.setUser(user);
    }
    public updateLocalStorageItem(item: string, value: string): void {
        localStorage.setItem(item, value);
    }
    public clearLocalStorageItem(item: string): void {
        localStorage.removeItem(item);
    }
    public getPassword(): string {
        return localStorage.getItem("u_pass");
    }

    public getProfile():any{
        const method = 'GET';
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + this.getToken());
        return fetch(
            this.server + PROFILE.GET_PROFILE,
            {
                method,
                headers: myHeaders
            }
        ).then((res) => res.json(), catchError(this.handleError('GET PROFILE', null)));

        // const reqHeader = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     // 'No-Auth': 'True',
        //     'Authorization': "Bearer " + this.getToken(),
        // });
        // return this.httpClient
        //     .get(this.server + PROFILE.GET_PROFILE , {
        //         headers: reqHeader
        //     })
        //     .pipe(
        //         map((res) => res),
        //         catchError(this.handleError('GET PROFILE REQUEST'))
        //     );
    }
    
    public getInvoices():any{
        const method = 'POST';
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + this.getToken());
        return fetch(
            this.server + PROFILE.GET_INVOICES,
            {
                method,
                headers: myHeaders
            }
        ).then((res) => res.json(), catchError(this.handleError('GET INVOICES', null)));
    }
    public getNotifications():any{
        const reqHeader = new HttpHeaders();
        return this.httpClient
            .get(this.server + PROFILE.GET_NOTIFICATIONS, {
                headers: reqHeader
            })
            .pipe(
                map((res) => res),
                catchError(this.handleError('GET NOTIFICATIONS', null))
            );
    }
    public notificationStatus():any{
        const reqHeader = new HttpHeaders();
        return this.httpClient
            .get(this.server + PROFILE.NOTIFICATION_STATUS, {
                headers: reqHeader
            })
            .pipe(
                map((res) => res),
                catchError(this.handleError('GET NOTIFICATION STATUS', null))
            );
    }
    public getTermsConditions():any{
        const method = 'GET';
        const myHeaders = new Headers();
        return fetch(
            this.server + PROFILE.TERMS_CONDITIONS,
            {
                method,
                headers: myHeaders
            }
        ).then((res) => res.json(), catchError(this.handleError('GET TERMS AND CONDITIONS', null)));
    }
    public getPrivacyPolicy():any{
        const method = 'GET';
        const myHeaders = new Headers();
        return fetch(
            this.server + PROFILE.POLICY,
            {
                method,
                headers: myHeaders
            }
        ).then((res) => res.json(), catchError(this.handleError('GET PRIVACY POLICY', null)));
    }
    public updateProfile(profile: any): any {
        const reqHeader = new HttpHeaders();
        return this.httpClient
            .post(this.server + PROFILE.UPDATE_PROFILE, JSON.stringify(profile), {
                headers: reqHeader
            })
            .pipe(
                map((res) => res),
                catchError(this.handleError('UPDATE PROFILE', null))
            );
    }
    public updateMemberImage(photo): any {
        const reqHeader = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		return this.httpClient
			.post(
				this.server + PROFILE.UPDATE_MEMBER_IMAGE,
				{
					photo : photo
				},
				{
					headers: reqHeader
				}
			)
			.pipe(
				map((res) => res),
				catchError(this.handleError('UPDATE MEMBER IMAGE', false))
			);
    }
}
