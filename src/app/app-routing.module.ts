import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from 'src/app/authentication/authentication.component';
import { Home } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { ClassDetail } from './pages/class-detail/class-detail.component';
import { Subscriptions } from './pages/subscriptions/subscriptions.component';
import { PersonalTraining } from './pages/personal-training/personal-training.component';

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

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: false
		})
	],
	exports: []
})
export class AppRoutingModule {}
