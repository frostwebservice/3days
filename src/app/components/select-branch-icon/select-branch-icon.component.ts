import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { BranchSelectionComponent } from '../branch-selection/branch-selection.component';

@Component({
	selector: 'app-select-branch-icon',
	templateUrl: './select-branch-icon.component.html',
	styleUrls: ['./select-branch-icon.component.css']
})
export class SelectBranchIconComponent implements OnInit {

	constructor(
		private dialog: MatDialog
	) {
		
	}

	ngOnInit(): void {
	}
	openSelectBranchDialog(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			title: 'Select Branch',
		};
		this.dialog.open(BranchSelectionComponent, dialogConfig)
		.afterClosed()
		.subscribe((status) => {
			if (status) {
	
			}
		});
	}
}
