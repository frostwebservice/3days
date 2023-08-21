import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClassDetail } from 'src/app/pages/class-detail/class-detail.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
	selector: 'app-personal-training-item',
	templateUrl: './personal-training-item.component.html',
	styleUrls: ['./personal-training-item.component.css']
})
export class PersonalTrainingItemComponent implements OnInit {

	constructor(
		private router: Router,
		private dialog: MatDialog
	) { }

	@Input('personalTraining') personalTraining;
	ngOnInit(): void {}

	showClassDetail(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		if (!this.personalTraining.subscribed ){
			dialogConfig.autoFocus = true;
			dialogConfig.data = {
				title: 'Buy PT Session',
				description : 'not_subscribed_buy_pt_session',
				trueLabel : 'Buy',
				falseLabel : 'Cancel'
			};
			this.dialog.open(ConfirmDialogComponent, dialogConfig)
			.afterClosed()
			.subscribe((res) => {
				if (res){
					this.router.navigate(['/products']);
				}
			});
		}else{
			dialogConfig.height ="80vh";
			// dialogConfig.width ="600px";
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
}
