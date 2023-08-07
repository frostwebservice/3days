import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/utils/data.types';
@Component({
    selector: 'app-branch-selection',
    templateUrl: './branch-selection.component.html',
    styleUrls: ['./branch-selection.component.css']
})
  export class BranchSelectionComponent implements OnInit {

    constructor() { }
    branches: Branch[] = [
    ];
    ngOnInit(): void {
    }

}
