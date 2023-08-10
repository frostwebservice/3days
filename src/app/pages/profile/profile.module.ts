import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from '../../components/components.module'
import { Profile } from './profile.component'
import { TranslateModule } from '@ngx-translate/core'

const routes = [
	{
		path: '',
		component: Profile,
	},
]

@NgModule({
	declarations: [Profile],
	imports: [
		CommonModule, 
		ComponentsModule, 
		RouterModule.forChild(routes),
		TranslateModule.forChild({ extend: true }),
	],
	exports: [Profile],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
