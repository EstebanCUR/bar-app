import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrderAccountComponent } from './my-order-account/my-order-account.component';
import { MyOrderConfirmComponent } from './my-order-confirm/my-order-confirm.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'add-products',component: MyOrderComponent},
    {path: 'confirm-products',component: MyOrderConfirmComponent},
    {path: 'account',component: MyOrderAccountComponent},
    {path: 'thanks',component: ThanksPageComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrderRoutingModule { }
