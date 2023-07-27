import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { AuthenticationComponent } from './authentication/authentication.component'
import { AgmCoreModule } from '@agm/core';
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
		path: '**',
		redirectTo: '/'
	}
]

@NgModule({
	declarations: [
		AppComponent,
		AuthenticationComponent],
	imports: [
		BrowserModule, RouterModule.forRoot(routes), ComponentsModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
