import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from 'src/app/authentication/authentication.component';
import { Home } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { ClassDetail } from './pages/class-detail/class-detail.component';
import { Subscriptions } from './pages/subscriptions/subscriptions.component';
import { PersonalTraining } from './pages/personal-training/personal-training.component';

import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditons } from './pages/terms-conditions/terms-conditions.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	// {
	// 	path: '',
	// 	loadChildren: () =>
	// 		import('./pages/home/home.module').then((m) => m.HomeModule),
	// },
	{
		path: '',
		component: Home,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('src/app/pages/home/home.module').then(
						(m) => m.HomeModule
					)
			}
		],
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
		canActivate: [AuthGuard]
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
		canActivate: [AuthGuard]
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
		canActivate: [AuthGuard]
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./pages/products/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'checkout',
		loadChildren: () =>
			import('./pages/checkouts/checkouts.module').then((m) => m.CheckoutsModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'products/buy/:id',
		loadChildren: () =>
			import('./pages/products/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'bookings',
		loadChildren: () =>
			import('./pages/bookings/bookings.module').then((m) => m.BookingsModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'class-detail',
		component: ClassDetail,
		data: {
			title: 'Class Detail'
		},
		canActivate: [AuthGuard]
	},
	{
		path: 'subscriptions',
		component: Subscriptions,
		data: {
			title: 'Subscriptions'
		},
		canActivate: [AuthGuard]
	},
	{
		path: 'personal-training',
		component: PersonalTraining,
		data: {
			title: 'Personal Training'
		},
		canActivate: [AuthGuard]
	},
	{
		path: 'privacy-policy',
		component: PrivacyPolicy,
		data: {
			title: 'Privacy Policy'
		}
	},
	// {
	// 	path: 'terms-conditions',
	// 	component: TermsConditons,
	// 	data: {
	// 		title: 'Terms Conditions'
	// 	}
	// },
	{
		path: '**',
		redirectTo: '/'
	}
]

@NgModule({
	imports: [
		CommonModule,
		// BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: false
		})
	],
	exports: []
})
export class AppRoutingModule {}
