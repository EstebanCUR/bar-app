import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyMenuRoutingModule } from './my-menu-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { MyMenuComponent } from './my-menu/my-menu.component';

@NgModule({
  declarations: [
    MyMenuComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MyMenuRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class MyMenuModule { }
