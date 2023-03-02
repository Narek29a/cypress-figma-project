import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {MaterialSharedModule} from "../material-shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MaterialSharedModule,
    FlexLayoutModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {

}
