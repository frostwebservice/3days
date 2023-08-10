import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProfileIconComponent } from './back-profile-icon.component';

describe('BackProfileIconComponent', () => {
  let component: BackProfileIconComponent;
  let fixture: ComponentFixture<BackProfileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackProfileIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
