import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from 'src/app/authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
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
		path: '**',
		redirectTo: '/'
	}
];

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
