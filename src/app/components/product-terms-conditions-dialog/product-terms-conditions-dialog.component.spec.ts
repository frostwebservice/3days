import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTermsConditionsDialogComponent } from './product-terms-conditions-dialog.component';

describe('ProductTermsConditionsDialogComponent', () => {
  let component: ProductTermsConditionsDialogComponent;
  let fixture: ComponentFixture<ProductTermsConditionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTermsConditionsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTermsConditionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
