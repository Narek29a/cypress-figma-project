import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  imports: [FlexLayoutModule],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
