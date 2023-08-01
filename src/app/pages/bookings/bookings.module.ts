import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ComponentsModule } from '../../components/components.module'
import { Bookings } from './bookings.component'

const routes = [
	{
		path: '',
		component: Bookings,
	},
]

@NgModule({
		declarations: [Bookings],
		imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes),
			BsDatepickerModule,
		],
		exports: [Bookings],
		schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookingsModule {}
