import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterModule} from "./footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    DashboardModule,
    BrowserAnimationsModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
