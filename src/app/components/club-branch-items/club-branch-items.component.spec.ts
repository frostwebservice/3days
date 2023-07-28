import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBranchItemsComponent } from './club-branch-items.component';

describe('ClubBranchItemsComponent', () => {
  let component: ClubBranchItemsComponent;
  let fixture: ComponentFixture<ClubBranchItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubBranchItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubBranchItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
