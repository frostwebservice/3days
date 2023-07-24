import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
})
export class Test {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('test - Pristine Liquid Shark')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'test - Pristine Liquid Shark',
      },
    ])
  }
}
