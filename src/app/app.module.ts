import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedesprouinputModule } from 'redesprouinput';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RedesprouinputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
