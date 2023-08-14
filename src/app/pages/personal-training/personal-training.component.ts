import { Component, OnInit } from '@angular/core';
import { TimeSession } from 'src/app/utils/data.types';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Product } from 'src/app/models/product.model';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ClassDetail } from '../class-detail/class-detail.component';
import { ToasterService, Toast } from 'angular2-toaster';

import * as moment from 'moment';

@Component({
    selector: 'app-personal-training',
    templateUrl: './personal-training.component.html',
    styleUrls: ['./personal-training.component.css']
})
export class PersonalTraining implements OnInit {

    // sessionlist : TimeSession[] = [
    //     {id: 1, class_name:"لياقة بدنية",trainer_name:"مع كورن",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع سارة حسام",branch_name:"Al-sahafa male",time:"4:00-5:00",count:3,photo:"person2.png"},
    //     {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:4,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:8,photo:"person2.png"},
    //     {id: 1, class_name:"Cross-training",trainer_name:"مع راسم",branch_name:"Al-sahafa male",time:"4:00-5:00",count:0,photo:"person1.png"},
    //     {id: 1, class_name:"Cross-fit",trainer_name:"مع ماركوس",branch_name:"Al-sahafa male",time:"4:00-5:00",count:5,photo:""},
    // ];

    personalTrainings: [] = [];
    constructor(
        private userService: UserService,
        private loadingService: LoaderService,
		private branchService: BranchService,
		private toasterService: ToasterService,
		private dialog: MatDialog
    ) { 
        this.branch_id = this.userService.getDefaultBranchId();
        this.getAllPts();
    }

    session_date = moment().format('YYYY-MM-DD') ;
	branch_id = 4;
	
    getAllPts(){
		this.loadingService.setLoading(true);
		this.branchService.getBranchAllPTSessions(this.branch_id,moment(this.session_date).format('YYYY-MM-DD')).subscribe((res) => {
            this.loadingService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get PT session failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get PT session failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
                this.personalTrainings = res.data;
			}
		});
	}
    changeDate($event){
		this.getAllPts();
	}

    ngOnInit(): void {
    }

}
