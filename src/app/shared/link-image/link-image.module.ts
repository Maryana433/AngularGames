import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkImageComponent} from "./link-image.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [LinkImageComponent],
  exports:[LinkImageComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class LinkImageModule { }
