import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ComponentsModule } from '../components/components.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
	declarations: [
		LoginComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent,
		RegisterComponent,
	],
	imports: [
		ComponentsModule,
		CommonModule,
		RouterModule.forChild(AuthenticationRoutingModule),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
	]
})
export class AuthenticationModule { }
