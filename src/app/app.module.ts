import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { RedesprouinputModule } from 'redesprouinput';
import { ReactiveFormsModule } from '@angular/forms';
import { RedesprouinputModule } from 'projects/redesprouinput/src/lib/redesprouinput.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RedesprouinputModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
