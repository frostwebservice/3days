import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
	HttpClient,
	HttpClientModule,
	HTTP_INTERCEPTORS
} from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from 'src/app/interceptors/api.interceptor';
import { AppComponent } from './app.component';

import { AuthenticationComponent } from './authentication/authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassDetail } from './pages/class-detail/class-detail.component';
import { Subscriptions } from './pages/subscriptions/subscriptions.component';
import { PersonalTraining } from './pages/personal-training/personal-training.component';

import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';

const config: SocketIoConfig = {
	url: environment.api,
	options: {}
};
  
export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient);
}

@NgModule({
	declarations: [
		AppComponent,
		AuthenticationComponent,
		ProfileComponent,
		ClassDetail,
		Subscriptions,
		PersonalTraining,
	],
	imports: [
		BrowserModule, 
		RouterModule, 
		ComponentsModule,
		BrowserAnimationsModule,
		FormsModule, 
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		BsDatepickerModule.forRoot(),
		// ServiceWorkerModule.register('ngsw-worker.js', {
		// 	enabled: environment.production
		// }),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
  		AppRoutingModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
