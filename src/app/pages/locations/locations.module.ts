import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Locations } from './locations.component'

const routes = [
  {
    path: '',
    component: Locations,
  },
]

@NgModule({
  declarations: [Locations],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Locations],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LocationsModule {}
