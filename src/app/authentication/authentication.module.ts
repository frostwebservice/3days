import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
		FormsModule, 
		RouterModule.forChild(AuthenticationRoutingModule),
		TranslateModule.forChild({ extend: true }),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
		BsDatepickerModule
	],
	providers : []
})
export class AuthenticationModule { }
