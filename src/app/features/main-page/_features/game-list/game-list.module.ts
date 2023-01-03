import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import {GameElementModule} from "./_features/game-element/game-element.module";



@NgModule({
    declarations: [
        GameListComponent
    ],
    exports: [
        GameListComponent
    ],
  imports: [
    CommonModule,
    GameElementModule
  ]
})
export class GameListModule { }
