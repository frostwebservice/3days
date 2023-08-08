import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ComponentsModule } from '../../components/components.module'
import { Bookings } from './bookings.component'
import { TranslateModule } from '@ngx-translate/core'
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';

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
			TranslateModule.forChild({ extend: true }),
		],
		exports: [Bookings],
		schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookingsModule {}
