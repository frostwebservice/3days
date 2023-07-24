import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-bookings',
  templateUrl: 'bookings.component.html',
  styleUrls: ['bookings.component.css'],
})
export class Bookings {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Bookings - Pristine Liquid Shark')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Bookings - Pristine Liquid Shark',
      },
    ])
  }
}
