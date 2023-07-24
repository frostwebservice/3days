import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css'],
})
export class Locations {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Locations - Pristine Liquid Shark')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Locations - Pristine Liquid Shark',
      },
    ])
  }
}
