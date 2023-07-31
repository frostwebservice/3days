import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TimeSession ,AppointmentItem} from 'src/app/utils/data.types';
@Component({
	selector: 'app-bookings',
	templateUrl: 'bookings.component.html',
	styleUrls: ['bookings.component.css'],
})
export class Bookings {

	sessionlist : TimeSession[] = [
        {id: 1, class_name:"لياقة بدنية",trainer_name:"مع كورن",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع سارة حسام",branch_name:"Al-sahafa male",time:"4:00-5:00",count:3,photo:"person2.png"},
        {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:8,photo:"person2.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:0,photo:"person1.png"},
        {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:5,photo:""},
    ];
	appointmentlist : AppointmentItem[] = [
        {id: 345422, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"13:00 - 14:00",date:"11-06-2023",status:"completed",banner:"bookings1.png"},
        {id: 345423, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"16:00 - 17:00",date:"14-06-2023",status:"active",banner:"bookings1.png"},
        {id: 345424, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"8:00 - 9:00",date:"15-06-2023",status:"pending",banner:"bookings1.png"},
        {id: 345425, class_name:"تدريب على الجري",trainer_name:"أحمد سمير عبد الرحمن",time:"13:00 - 14:00",date:"11-06-2023",status:"inactive",banner:"bookings1.png"},
    ];
	selected_tab :number = 1;
	
	selectTab (tab:number):void{
		this.selected_tab = tab;
	}
	constructor(private title: Title, private meta: Meta) {
		this.title.setTitle('Bookings - 3 Days')
		this.meta.addTags([
			{
				property: 'og:title',
				content: 'Bookings - 3 Days',
			},
		])
	}
}
