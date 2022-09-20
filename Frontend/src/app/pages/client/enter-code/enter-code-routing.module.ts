import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterCodeComponent } from './enter-code/enter-code.component';

const routes: Routes = [
  {path: '' , component: EnterCodeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterCodeRoutingModule { }
