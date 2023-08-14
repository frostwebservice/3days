import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule,NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSpinBoxModule } from 'ng-spin-box';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [

  ],
  imports: [
    MatDialogModule,
    NgSpinBoxModule,
    BsDatepickerModule,
    // NgbToastModule,
    // ToastrModule.forRoot()
  ],
  exports: [
    MatDialogModule,
  ]
})
export class SharedModule {}
