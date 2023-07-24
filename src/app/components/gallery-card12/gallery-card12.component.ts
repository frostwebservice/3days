import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card12',
  templateUrl: 'gallery-card12.component.html',
  styleUrls: ['gallery-card12.component.css'],
})
export class GalleryCard12 {
  @Input()
  subtitle: string = 'Lorem ipsum dolor sit amet'
  @Input()
  rootClassName: string = ''
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200'
  @Input()
  image_alt: string = 'image'
  @Input()
  title: string = 'Project Title'
  constructor() {}
}
