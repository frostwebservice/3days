import { Component, OnInit, Input , Inject ,Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef} from "@angular/material/dialog";
import { Branch } from 'src/app/utils/data.types';
@Component({
	selector: 'app-branch-details',
	templateUrl: './branch-details.component.html',
	styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
    @Input('club') selectedBranch : Branch;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.selectedBranch = data.club;
	}
	ngOnInit(): void {
	}

}
