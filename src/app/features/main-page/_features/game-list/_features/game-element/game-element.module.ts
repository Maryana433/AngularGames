import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameElementComponent } from './game-element.component';
import {LinkImageModule} from "./_features/link-image/link-image.module";



@NgModule({
  declarations: [
    GameElementComponent
  ],
  imports: [
    CommonModule, LinkImageModule
  ],
  exports: [
    GameElementComponent
  ]
})
export class GameElementModule { }
