import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderAccountComponent } from './my-order-account.component';

describe('MyOrderAccountComponent', () => {
  let component: MyOrderAccountComponent;
  let fixture: ComponentFixture<MyOrderAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrderAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
