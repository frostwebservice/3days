import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  rawdnp2: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Products - Pristine Liquid Shark')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Products - Pristine Liquid Shark',
      },
    ])
  }
}
