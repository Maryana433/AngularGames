import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLinkComponent} from "./image-link.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ImageLinkComponent],
  exports:[ImageLinkComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class LinkImageModule { }
