import { Component, OnInit } from '@angular/core';
import {Branch} from 'src/app/utils/data.types';
// import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-club-branches',
    templateUrl: './club-branches.component.html',
    styleUrls: ['./club-branches.component.css']
})
export class ClubBranches {
    constructor(
        private branchService: BranchService,
        private userService: UserService,
        private loadingService: LoaderService
    ) { 
        this.onSearchBranch();
    }
    cOption: boolean = true;
    keyword: string = "";
    branches: Branch[] = [
        { name_ar: 'Pulse & Power Gym',name_en: 'Pulse & Power Gym', address1: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية',address2 : '', id: 100,email: 'pulsepowergym@hotmail.com',startup_date: '2023-05-01',branch_capacity: 100,branch_category:'الفرع الرئيسي',location_type:'رجال',lat: 24.800569,lng:46.647642,phone:"123456789",city_id:2 },
    ];
    selectedBranch : Branch = this.branches[0];
    reviewStar: number = 0;
    submitting = false;
    loadClub(data):void{
        let club = data.club;
        let rd = data.rd;
        this.selectedBranch = club;
        if (rd == 'detail'){ // open club detail
            this.cOption = true;
        }else{ // open club review
            this.cOption = false;
        }
        this.cOption = true;
        this.reviewStar = 0;
    }
    review(num:number){
        this.reviewStar = num;
    }
	onSearchBranch(searchValue: string = ""): void {  
		this.keyword = searchValue;
		this.branchService.getBranchList(this.userService.getClientId(),this.keyword).subscribe((res) => {
			if (!res) {
                this.loadingService.setLoading(false);
                console.log('non-search-branch');
				return;
			}
            this.loadingService.setLoading(false);
            console.log(res['data']);
			this.branches = res['data'];
            this.selectedBranch  = this.branches[0];
		});
	}
    rateSession():void{
       let data = {rating: this.reviewStar,comment: ''};
    }
}
