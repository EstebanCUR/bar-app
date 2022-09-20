import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMenuComponent } from './my-menu/my-menu.component';

const routes: Routes = [
  {path: '' , children:[
    {path: 'products-list', component: MyMenuComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMenuRoutingModule { }
