import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Home'
  @Input()
  text2: string = 'Membership'
  @Input()
  text3: string = 'Bookings'
  @Input()
  text4: string = 'Profile'
  @Input()
  text1: string = 'Products'
  constructor() {}
}
