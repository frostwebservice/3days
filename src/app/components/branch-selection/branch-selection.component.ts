import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MatDialogRef } from "@angular/material/dialog";
@Component({
		selector: 'app-branch-selection',
		templateUrl: './branch-selection.component.html',
		styleUrls: ['./branch-selection.component.css']
})
export class BranchSelectionComponent implements OnInit {
	client_id: number;
	branches;
	selectedBranchId:number;
	constructor(
		private userService: UserService,
		private branchService: BranchService,
		private loaderService: LoaderService,
		private dialogRef: MatDialogRef<BranchSelectionComponent>,
	) { 
		this.client_id = this.userService.getClientId();
		loaderService.setLoading(true);
		this.branchService.getBranchList(this.client_id,"").subscribe((res) => {
			if (!res) {
				return;
			}
			this.branches = res['data'];
			loaderService.setLoading(false);
			console.log(res);
		});
		this.selectedBranchId = this.userService.getDefaultBranchId();
	}
	setDefaultBranch(){
		this.userService.setDefaultBranchId(this.selectedBranchId);
		this.dialogRef.close();
	}
	ngOnInit(): void {
	}

}
