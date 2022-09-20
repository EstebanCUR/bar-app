import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { OrderTabComponent } from './order-tab/order-tab.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuTabComponent,
    OrderTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    MenuTabComponent,
    OrderTabComponent
  ]
})
export class SharedModule { }
