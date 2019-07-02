import { NgModule } from '@angular/core';
import { RedesprouInputPhoneComponent } from './redesprou-input-phone/redesprou-input-phone.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ RedesprouInputPhoneComponent],
  imports: [ CommonModule, ReactiveFormsModule
  ],
  exports: [RedesprouInputPhoneComponent]
})
export class RedesprouinputModule { }
