import { NgModule } from '@angular/core';
import { RedesprouInputPhoneComponent } from './redesprou-input-phone/redesprou-input-phone.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [ RedesprouInputPhoneComponent],
  imports: [ CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()
  ],
  exports: [RedesprouInputPhoneComponent]
})
export class RedesprouinputModule { }
