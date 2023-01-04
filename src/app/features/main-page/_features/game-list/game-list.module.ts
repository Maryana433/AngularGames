import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import {GameElementModule} from "./_features/game-element/game-element.module";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
    declarations: [
        GameListComponent
    ],
    exports: [
        GameListComponent
    ],
  imports: [
    CommonModule,
    GameElementModule,
    NgxPaginationModule
  ]
})
export class GameListModule { }
