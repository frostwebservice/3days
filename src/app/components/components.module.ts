import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

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
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { PageTabComponent } from './page-tab/page-tab.component';
import { PolygonBorderDiv } from './polygon-border-div/polygon-border-div.component';
import { ClubBranchItemsComponent } from './club-branch-items/club-branch-items.component'

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
    ClubBranchItemsComponent,
  ],
  imports: [CommonModule, RouterModule],
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
