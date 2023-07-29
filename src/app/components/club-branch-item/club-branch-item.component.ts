import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Club } from 'src/app/utils/data.types';
import { PolygonBorderDiv } from '../polygon-border-div/polygon-border-div.component'
@Component({
    selector: 'app-club-branch-items',
    templateUrl: './club-branch-item.component.html',
    styleUrls: ['./club-branch-item.component.css']
})
export class ClubBranchItem implements OnInit {
    @Input('club') club : Club = { 
		name: 'Pulse & Power Gym', 
		address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية' ,
		id: 100,
		email: 'pulsepowergym@hotmail.com',
		launch_date: '2023-05-01',
		capacity: 100,
		branch:'الفرع الرئيسي',
		type:'رجال'
	};
	@Input('selectItem')
	public set selectItem(club:Club){
		if (this.club.id == club.id){
			this.selected = true;
		}else{
			this.selected = false;
		}
		this.club = club;
	}
	@Output() loadClub = new EventEmitter();

	selected : boolean = false;
	loadClubDetail(event: Event,club:Club){
		let data = {club: club, rd: 'detail'};
		this.loadClub.emit(data);
    }
    loadClubReview(event: Event,club:Club){
		let data = {club: club, rd: 'review'};
		this.loadClub.emit(data);
    }
	constructor() { }
    ngOnInit(): void {
    }
}