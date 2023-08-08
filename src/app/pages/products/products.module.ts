import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from '../../components/components.module'
import { Products } from './products.component'

const routes = [
  {
    path: '',
    component: Products,
  },
]

@NgModule({
  declarations: [Products],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Products],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule {}
