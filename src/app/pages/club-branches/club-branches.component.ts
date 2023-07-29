import { Component, OnInit } from '@angular/core';
import {Club} from 'src/app/utils/data.types';
@Component({
    selector: 'app-club-branches',
    templateUrl: './club-branches.component.html',
    styleUrls: ['./club-branches.component.css']
})
export class ClubBranches implements OnInit {
    cOption: boolean = false;
    clubs: Club[] = [
        { name: 'Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية',id: 100,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' ,id: 101,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' ,id: 102,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية',id: 103,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال'  },
        // { name: '_Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية' },
        // { name: '_ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' },
        // { name: '_الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' },
        // { name: '_Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية' },
    ];
    selectedClub : Club = this.clubs[0];

    loadClub(data):void{
        let club = data.club;
        let rd = data.rd;
        this.selectedClub = club;
        if (rd == 'detail'){ // open club detail
            this.cOption = true;
        }else{ // open club review
            this.cOption = false;
        }
    }
    constructor() { }

    ngOnInit(): void {
    }

}
