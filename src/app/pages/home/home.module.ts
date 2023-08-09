import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module'
import { Home } from './home.component'

const routes = [
  {
    path: '',
    component: Home,
  },
]

@NgModule({
  declarations: [Home],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes),TranslateModule],
  exports: [Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
