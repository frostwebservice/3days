import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BranchService } from 'src/app/services/branch.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MatDialogRef } from "@angular/material/dialog";
import { ToasterService, Toast } from 'angular2-toaster';
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
		private toasterService: ToasterService,
		private loaderService: LoaderService,
		private dialogRef: MatDialogRef<BranchSelectionComponent>,
	) { 
		this.client_id = this.userService.getClientId();
		loaderService.setLoading(true);
		this.branchService.getBranchList(this.client_id,"").subscribe((res) => {
			loaderService.setLoading(false);
			if (!res) {
				const toast: Toast = {
					type: 'error',
					title: 'Get branch list failed',
					body: "Something went wrong",
				};
				this.toasterService.pop(toast);
				return;
			}else if(!res.status){
				const toast: Toast = {
					type: 'error',
					title: 'Get branch list failed',
					body: res.message,
				};
				this.toasterService.pop(toast);
				return;
			}else{
				this.branches = res['data'];
			}
		});
		this.selectedBranchId = this.userService.getDefaultBranchId();
	}
	setDefaultBranch(){
		this.userService.setDefaultBranchId(this.selectedBranchId);
		const toast: Toast = {
			type: 'success',
			title: 'Success',
			body: 'Default Branch Selected.',
		};
		
		this.toasterService.pop(toast);
		this.dialogRef.close();
	}
	ngOnInit(): void {
	}

}
