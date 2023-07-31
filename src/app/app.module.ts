import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
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
		path: 'checkout',
		component: Checkout,
		data: {
			title: 'Checkout'
		}
	},
	{
		path: 'club-branches',
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
	],
	imports: [
		BrowserModule, RouterModule.forRoot(routes), ComponentsModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
