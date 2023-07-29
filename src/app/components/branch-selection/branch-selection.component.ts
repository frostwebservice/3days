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
        { name: 'Pulse & Power Gym', address: 'شارع موسى بن نصير، العليا، الرياض 12241، المملكة العربية السعودية',id: 100,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'ProFit Athletic Club', address: 'شارع آمنة بنت وهب، النعيم، جدة 23621، المملكة العربية السعودية' ,id: 101,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'الرياض لكمال الأجسام', address: 'طريق الملك خالد، العاقول، المدينة المنورة 42241، المملكة العربية السعودية' ,id: 102,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال' },
        { name: 'Sculpt & Sprint Fitness Haven', address: 'الخالدية، المدينة المنورة 42317، المملكة العربية السعودية',id: 103,email: 'pulsepowergym@hotmail.com',launch_date: '2023-05-01',capacity: 100,branch:'الفرع الرئيسي',type:'رجال'  },
    ];
    ngOnInit(): void {
    }

}
