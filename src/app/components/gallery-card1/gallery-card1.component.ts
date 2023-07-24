import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card1',
  templateUrl: 'gallery-card1.component.html',
  styleUrls: ['gallery-card1.component.css'],
})
export class GalleryCard1 {
  @Input()
  title: string = 'Project Title'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200'
  @Input()
  rootClassName: string = ''
  @Input()
  subtitle: string = 'Lorem ipsum dolor sit amet'
  constructor() {}
}
