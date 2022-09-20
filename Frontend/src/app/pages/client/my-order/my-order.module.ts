import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyOrderComponent } from './my-order/my-order.component';
import { AddProductsComponent } from 'src/app/components/add-products/add-products.component';
import { EmptyOrderComponent } from 'src/app/components/empty-order/empty-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { MyOrderConfirmComponent } from './my-order-confirm/my-order-confirm.component';
import { ConfirmProductsComponent } from 'src/app/components/confirm-products/confirm-products.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { MyOrderAccountComponent } from './my-order-account/my-order-account.component';
import { AccountComponent } from 'src/app/components/account/account.component';


@NgModule({
  declarations: [
    MyOrderComponent,
    AddProductsComponent,
    EmptyOrderComponent,
    AddProductComponent,
    MyOrderConfirmComponent,
    ConfirmProductsComponent,
    ThanksPageComponent,
    MyOrderAccountComponent,
    AccountComponent

  ],
  imports: [
    CommonModule,
    MyOrderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MyOrderModule { }
