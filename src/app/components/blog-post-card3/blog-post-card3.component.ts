import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card3',
  templateUrl: 'blog-post-card3.component.html',
  styleUrls: ['blog-post-card3.component.css'],
})
export class BlogPostCard3 {
  @Input()
  title: string = 'Lorem ipsum dolor sit amet'
  @Input()
  image_alt: string = 'image'
  @Input()
  button: string = 'Book'
  @Input()
  rootClassName: string = ''
  @Input()
  image_src: string = '/assets/classes/3days%20kids%20acedmy-min-1100w.jpg'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
  constructor() {}
}
