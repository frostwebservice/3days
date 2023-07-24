import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card4',
  templateUrl: 'blog-post-card4.component.html',
  styleUrls: ['blog-post-card4.component.css'],
})
export class BlogPostCard4 {
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'Food & Drink'
  @Input()
  description: string =
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  date: string = 'JULY 24'
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
