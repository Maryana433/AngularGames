import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkImageComponent} from "./link-image.component";



@NgModule({
  declarations: [LinkImageComponent],
  exports:[LinkImageComponent],
  imports: [
    CommonModule
  ]
})
export class LinkImageModule { }
