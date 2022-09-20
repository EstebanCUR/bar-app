import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProductsComponent } from './confirm-products.component';

describe('ConfirmProductsComponent', () => {
  let component: ConfirmProductsComponent;
  let fixture: ComponentFixture<ConfirmProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
