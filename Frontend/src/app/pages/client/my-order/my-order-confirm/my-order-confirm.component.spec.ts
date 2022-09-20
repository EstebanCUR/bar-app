import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderConfirmComponent } from './my-order-confirm.component';

describe('MyOrderConfirmComponent', () => {
  let component: MyOrderConfirmComponent;
  let fixture: ComponentFixture<MyOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrderConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
