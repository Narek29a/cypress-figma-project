import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialSharedModule} from "../material-shared.module";

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialSharedModule
  ]
})
export class FooterModule { }
