import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
// import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from 'src/app/interceptors/api.interceptor';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';


import { ClassDetail } from './pages/class-detail/class-detail.component';
import { Subscriptions } from './pages/subscriptions/subscriptions.component';
import { PersonalTraining } from './pages/personal-training/personal-training.component';
const routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: '',
		component: AuthenticationComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('src/app/authentication/authentication.module').then(
						(m) => m.AuthenticationModule
					)
			}
		],
	},
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('src/app/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		],
	},
	{
		path: 'test',
		loadChildren: () =>
			import('./pages/test/test.module').then((m) => m.TestModule),
	},
	{
		path: 'profile',
		loadChildren: () =>
			import('./pages/profile/profile.module').then((m) => m.ProfileModule),
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'locations',
		loadChildren: () =>
			import('./pages/locations/locations.module').then(
				(m) => m.LocationsModule
			),
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./pages/products/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'bookings',
		loadChildren: () =>
			import('./pages/bookings/bookings.module').then((m) => m.BookingsModule),
	},
	{
		path: 'class-detail',
		component: ClassDetail,
		data: {
			title: 'Class Detail'
		}
	},
	{
		path: 'subscriptions',
		component: Subscriptions,
		data: {
			title: 'Subscriptions'
		}
	},
	{
		path: 'personal-training',
		component: PersonalTraining,
		data: {
			title: 'Personal Training'
		}
	},
	{
		path: '**',
		redirectTo: '/'
	}
]

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
		RouterModule.forRoot(routes), 
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
		// MdbModalModule,
		// NgbModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
  		// AppRoutingModule,
	],
	// providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
