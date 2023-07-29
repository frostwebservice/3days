import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceQrcodeComponent } from './attendance-qrcode.component';

describe('AttendanceQrcodeComponent', () => {
  let component: AttendanceQrcodeComponent;
  let fixture: ComponentFixture<AttendanceQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
