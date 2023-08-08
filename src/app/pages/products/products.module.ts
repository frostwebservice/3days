import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from '../../components/components.module'
import { Products } from './products.component'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
const routes = [
  {
    path: '',
    component: Products,
  },
]

@NgModule({
  declarations: [Products],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes),TranslateModule,BsDatepickerModule,FormsModule],
  exports: [Products],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule {}
