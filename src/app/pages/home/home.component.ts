import { Component, OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { LoaderService } from 'src/app/services/loader.service'
import { UserService } from 'src/app/services/user.service'
@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css'],
})
export class Home {
	rawh6dp: string = ' '
	rawf4zp: string = ' '
	rawwas1: string = ' '
	rawbzek: string = ' '
	rawiiqk: string = ' '
	is_authenticated :boolean = false;
	constructor(private title: Title, private meta: Meta, private loaderService:LoaderService, private userService:UserService) {
		this.title.setTitle('Home -3 Days');
		this.meta.addTags([
			{
				property: 'og:title',
				content: 'Home - 3 Days',
			},
		]);
		this.loaderService.setLoading(false);
		this.is_authenticated = this.userService.isAuthenticated();
	}
}
