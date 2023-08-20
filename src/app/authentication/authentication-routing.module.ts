import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';
import { RegisterComponent } from '../pages/register/register.component';


export const AuthenticationRoutingModule: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		data: {
			title: 'Log in'
		}
	},
	{
		path: 'signup',
		component: RegisterComponent,
		data: {
			title: 'Sign Up',
			isCompleted : false
		}
	},
	{
		path: 'signup/congratulation',
		component: RegisterComponent,
		data: {
			title: 'Sign Up',
			isCompleted : true
		}
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent,
		data: {
			title: 'Password Reset 1'
		}
	},
	{
		path: 'reset-password',
		component: ResetPasswordComponent,
		data: {
			title: 'Password Reset 2'
		}
	},
];
