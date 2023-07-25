import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawh6dp: string = ' '
  rawf4zp: string = ' '
  rawwas1: string = ' '
  rawbzek: string = ' '
  rawiiqk: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home -3 Days')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Home - 3 Days',
      },
    ])
  }
}
