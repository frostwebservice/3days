import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBranchIconComponent } from './select-branch-icon.component';

describe('SelectBranchIconComponent', () => {
  let component: SelectBranchIconComponent;
  let fixture: ComponentFixture<SelectBranchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBranchIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBranchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
