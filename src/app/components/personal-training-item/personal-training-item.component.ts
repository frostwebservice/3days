import { Component, OnInit, Input } from '@angular/core';

import { ClassDetail } from 'src/app/pages/class-detail/class-detail.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
	selector: 'app-personal-training-item',
	templateUrl: './personal-training-item.component.html',
	styleUrls: ['./personal-training-item.component.css']
})
export class PersonalTrainingItemComponent implements OnInit {

	constructor(
		private dialog: MatDialog
	) { }

	@Input('personalTraining') personalTraining;
	ngOnInit(): void {}

	showClassDetail(){
		const dialogConfig = new MatDialogConfig();
        dialogConfig.height ="80vh";
        // dialogConfig.width ="600px";
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Class Detail',
			personalTraining : this.personalTraining
		};
		this.dialog.open(ClassDetail, dialogConfig)
		.afterClosed()
		.subscribe((res) => {
			console.log(res);
			if (res.status) {
			}
		});
	}
}
