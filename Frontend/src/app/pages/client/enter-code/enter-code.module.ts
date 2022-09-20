import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterCodeRoutingModule } from './enter-code-routing.module';

import { EnterCodeComponent } from './enter-code/enter-code.component';


@NgModule({
  declarations: [
    EnterCodeComponent
  ],
  imports: [
    CommonModule,
    EnterCodeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnterCodeModule { }
