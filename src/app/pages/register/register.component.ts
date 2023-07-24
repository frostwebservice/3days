import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Authorization -3 Days')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Authorization -3 Days',
      },
    ])
  }
}

