import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import {GameElementModule} from "./_features/game-element/game-element.module";
import {NgxPaginationModule} from "ngx-pagination";
import {FilterPipe} from "../../../../core/pipe/filter-pipe.pipe";
import {FormsModule} from "@angular/forms";
import {TagPipe} from "../../../../core/pipe/tag.pipe";


@NgModule({
    declarations: [
        GameListComponent, FilterPipe, TagPipe
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
