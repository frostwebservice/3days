import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Test } from './test.component'

const routes = [
  {
    path: '',
    component: Test,
  },
]

@NgModule({
  declarations: [Test],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Test],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestModule {}
