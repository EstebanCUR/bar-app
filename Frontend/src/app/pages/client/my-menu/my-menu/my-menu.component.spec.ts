import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuComponent } from './my-menu.component';

describe('MyMenuComponent', () => {
  let component: MyMenuComponent;
  let fixture: ComponentFixture<MyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
