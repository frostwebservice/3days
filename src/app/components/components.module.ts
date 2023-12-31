import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { MatTooltipModule } from '@angular/material/tooltip';

import { GalleryCard1 } from './gallery-card1/gallery-card1.component'
import { GalleryCard12 } from './gallery-card12/gallery-card12.component'
import { GalleryCard11 } from './gallery-card11/gallery-card11.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { TestimonialCard4 } from './testimonial-card4/testimonial-card4.component'
import { BlogPostCard4 } from './blog-post-card4/blog-post-card4.component'
import { BlogPostCard3 } from './blog-post-card3/blog-post-card3.component'
import { FeatureCard2 } from './feature-card2/feature-card2.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { PageTabComponent } from './page-tab/page-tab.component'
import { PolygonBorderDiv } from './polygon-border-div/polygon-border-div.component'
import { ClubBranchItem } from './club-branch-item/club-branch-item.component'
import { AttendanceQrcodeComponent } from './attendance-qrcode/attendance-qrcode.component'
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component'
import { BranchSelectionComponent } from './branch-selection/branch-selection.component'
import { SuspendSubscriptionComponent } from './suspend-subscription/suspend-subscription.component'
import { ReferralCodeComponent } from './referral-code/referral-code.component'
import { ConfirmCodeComponent } from './confirm-code/confirm-code.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { TranslateModule } from '@ngx-translate/core'
import { FormsModule } from '@angular/forms'
import { SelectBranchIconComponent } from './select-branch-icon/select-branch-icon.component'
import { BackProfileIconComponent } from './back-profile-icon/back-profile-icon.component'
import { RateBookingComponent } from './rate-booking/rate-booking.component'
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component'
import { Checkout } from './checkout/checkout.component'
import { PersonalTrainingItemComponent } from './personal-training-item/personal-training-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProductTermsConditionsDialogComponent } from './product-terms-conditions-dialog/product-terms-conditions-dialog.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component'
@NgModule({
	declarations: [
		GalleryCard1,
		GalleryCard12,
		GalleryCard11,
		NavigationLinks2,
		TestimonialCard4,
		BlogPostCard4,
		BlogPostCard3,
		FeatureCard2,
		NavigationLinks,
		NavigationLinks1,
		TestimonialCard2,
		HeaderComponent,
		FooterComponent,
		PageTabComponent,
		PolygonBorderDiv,
		ClubBranchItem,
		AttendanceQrcodeComponent,
		CancelBookingComponent,
		BranchSelectionComponent,
		SuspendSubscriptionComponent,
		ReferralCodeComponent,
		ConfirmCodeComponent,
		SpinnerComponent,
		SelectBranchIconComponent,
		BackProfileIconComponent,
		RateBookingComponent,
		CancelSubscriptionComponent,
		Checkout,
		PersonalTrainingItemComponent,
		ProductItemComponent,
		ConfirmDialogComponent,
		ProductTermsConditionsDialogComponent,
		BranchDetailsComponent
	],
	imports: [CommonModule, 
		SharedModule,
		RouterModule, 
		TranslateModule ,
		FormsModule,
		BsDatepickerModule,
		MatTooltipModule,
	],
	exports: [
		GalleryCard1,
		GalleryCard12,
		GalleryCard11,
		NavigationLinks2,
		TestimonialCard4,
		BlogPostCard4,
		BlogPostCard3,
		FeatureCard2,
		NavigationLinks,
		NavigationLinks1,
		TestimonialCard2,
		HeaderComponent,
		FooterComponent,
		PageTabComponent,
		PolygonBorderDiv,
		ClubBranchItem,
		AttendanceQrcodeComponent,
		CancelBookingComponent,
		BranchSelectionComponent,
		SuspendSubscriptionComponent,
		ReferralCodeComponent,
		ConfirmCodeComponent,
		SpinnerComponent,
		SelectBranchIconComponent,
		BackProfileIconComponent,
		CancelSubscriptionComponent,
		Checkout,
		PersonalTrainingItemComponent,
		ProductItemComponent,
		ConfirmDialogComponent,
		ProductTermsConditionsDialogComponent,
		BranchDetailsComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
