import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';
import { AUTH } from '../constants/api.constant';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Account, User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpService {

    constructor(
        private httpClient: HttpClient, 
        errorService: ErrorService
    ) {
        super(errorService);
    }
    
    test(data){
        console.log(data);
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
    signup(user: any): any {
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
    public requestResetPassword(email): Observable<boolean> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth': 'True'
        });
        return this.httpClient
        .post(
            this.server + AUTH.RESET_PASSWORD,
            { email: email },
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
        .post(this.server + AUTH.LOG_OUT, JSON.stringify(requestData), {
            headers: reqHeader
        })
        .pipe(
            map((res) => res['status']),
            catchError(this.handleError('RESET PASSWORD', false))
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
    public getToken(): any {
        return localStorage.getItem('token');
    }
    public updateLocalStorageItem(item: string, value: string): void {
        localStorage.setItem(item, value);
    }
    public clearLocalStorageItem(item: string): void {
        localStorage.removeItem(item);
    }
}
