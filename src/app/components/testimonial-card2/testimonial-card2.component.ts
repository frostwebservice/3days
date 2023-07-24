import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card2',
  templateUrl: 'testimonial-card2.component.html',
  styleUrls: ['testimonial-card2.component.css'],
})
export class TestimonialCard2 {
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  name: string = 'John Doe'
  @Input()
  profile_alt: string = 'profile'
  @Input()
  rootClassName: string = ''
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}
