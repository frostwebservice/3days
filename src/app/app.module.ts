import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { environment } from '../environments/environment';
import {
	HttpClient,
	HttpClientModule,
	HTTP_INTERCEPTORS
  } from '@angular/common/http';
// import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ApiInterceptor } from 'src/app/interceptors/api.interceptor';

import { AuthenticationComponent } from './authentication/authentication.component'
import { AgmCoreModule } from '@agm/core';
import { ClassDetail } from './pages/class-detail/class-detail.component';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditons } from './pages/terms-conditions/terms-conditions.component';
import { Checkout } from './pages/checkout/checkout.component';
import { ClubBranches } from './pages/club-branches/club-branches.component';
import { Notifications } from './pages/notifications/notifications.component';
import { FinancialOperations } from './pages/financial-operations/financial-operations.component';
import { Subscriptions } from './pages/subscriptions/subscriptions.component';
import { PersonalTraining } from './pages/personal-training/personal-training.component';
import { PersonalInfo } from './pages/personal-info/personal-info.component';
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
		path: 'privacy-policy',
		component: PrivacyPolicy,
		data: {
			title: 'Privacy Policy'
		}
	},
	{
		path: 'terms-conditions',
		component: TermsConditons,
		data: {
			title: 'Terms Conditions'
		}
	},
	{
		path: 'personal-data',
		component: PersonalInfo,
		data: {
			title: 'Personal Information'
		}
	},
	{
		path: 'checkout',
		component: Checkout,
		data: {
			title: 'Checkout'
		}
	},
	{
		path: 'branches',
		component: ClubBranches,
		data: {
			title: 'Club Branches'
		}
	},
	{
		path: 'notifications',
		component: Notifications,
		data: {
			title: 'Notifications'
		}
	},
	{
		path: 'financial-operations',
		component: FinancialOperations,
		data: {
			title: 'Financial Operations'
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

@NgModule({
	declarations: [
		AppComponent,
		AuthenticationComponent,
		ClassDetail,
		PrivacyPolicy,
		TermsConditons,
		Checkout,
		ClubBranches,
		Notifications,
		FinancialOperations,
		Subscriptions,
		PersonalTraining,
		PersonalInfo,
	],
	imports: [
		BrowserModule, RouterModule.forRoot(routes), ComponentsModule,
		BrowserAnimationsModule,
		FormsModule, 
		BsDatepickerModule.forRoot(),
		// ServiceWorkerModule.register('ngsw-worker.js', {
		// 	enabled: environment.production
		// }),
		// MdbModalModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
	],
	// providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
