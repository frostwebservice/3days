import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { AUTH } from '../constants/api.constant';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { Account, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpService{
	constructor(private httpClient: HttpClient, errorService: ErrorService) {
		super(errorService);
	}
	getArticles ()     
	{ 	   
		return "Hello world it is article service";    
	}    
}
