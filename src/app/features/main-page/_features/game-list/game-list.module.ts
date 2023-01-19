import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import {GameElementModule} from "./_features/game-element/game-element.module";
import {NgxPaginationModule} from "ngx-pagination";
import { GameNameFilterPipe} from "../../../../shared/pipe/filter-pipe/filter-games-by-name.pipe";
import {FormsModule} from "@angular/forms";
import {GameGenreFilterPipe} from "../../../../shared/pipe/filter-pipe/filter-games-by-genre.pipe";

@NgModule({
    declarations: [
        GameListComponent, GameNameFilterPipe, GameGenreFilterPipe
    ],
    exports: [
        GameListComponent
    ],
  imports: [
    CommonModule,
    GameElementModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class GameListModule { }
