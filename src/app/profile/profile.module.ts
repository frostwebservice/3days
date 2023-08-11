import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { PrivacyPolicy } from '../pages/privacy-policy/privacy-policy.component';
import { TermsConditons } from '../pages/terms-conditions/terms-conditions.component';
import { ClubBranches } from '../pages/club-branches/club-branches.component';
import { Notifications } from '../pages/notifications/notifications.component';
import { FinancialOperations } from '../pages/financial-operations/financial-operations.component';
import { PersonalInfo } from '../pages/personal-info/personal-info.component';

import { ComponentsModule } from '../components/components.module';
import { AgmCoreModule } from '@agm/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
	declarations: [
		PrivacyPolicy,
		TermsConditons,
		ClubBranches,
		Notifications,
		FinancialOperations,
		PersonalInfo,
	],
	imports: [
		ComponentsModule,
		CommonModule,
		SharedModule,
		FormsModule, 
		RouterModule.forChild(ProfileRoutingModule),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyAVqwHQGAyMBx6u8BD_FMn1Qo3wSYvYflc' }),
		BsDatepickerModule,
		TranslateModule, 
	],
	providers : []
})
export class ProfileModule { }
