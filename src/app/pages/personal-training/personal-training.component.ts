import { Component, OnInit } from '@angular/core';
import { TimeSession } from 'src/app/utils/data.types';

@Component({
    selector: 'app-personal-training',
    templateUrl: './personal-training.component.html',
    styleUrls: ['./personal-training.component.css']
})
export class PersonalTraining implements OnInit {

    sessionlist : TimeSession[] = [
        {id: 1, class_name:"لياقة بدنية",trainer_name:"مع كورن",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع سارة حسام",branch_name:"Al-sahafa male",time:"4:00-5:00",count:3,photo:"person2.png"},
        {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:8,photo:"person2.png"},
        {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:0,photo:"person1.png"},
        {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:5,photo:""},
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
