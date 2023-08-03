import { Routes } from '@angular/router';

import { PrivacyPolicy } from '../pages/privacy-policy/privacy-policy.component';
import { TermsConditons } from '../pages/terms-conditions/terms-conditions.component';
import { Checkout } from '../pages/checkout/checkout.component';
import { ClubBranches } from '../pages/club-branches/club-branches.component';
import { Notifications } from '../pages/notifications/notifications.component';
import { FinancialOperations } from '../pages/financial-operations/financial-operations.component';
import { PersonalInfo } from '../pages/personal-info/personal-info.component';

export const ProfileRoutingModule: Routes = [
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
];
