import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import {GameElementModule} from "./_features/game-element/game-element.module";
import {NgxPaginationModule} from "ngx-pagination";
import { GameNameFilterPipe} from "../../../../core/pipe/filter-pipe/filter-games-by-name.pipe";
import {FormsModule} from "@angular/forms";
import {GameGenreFilterPipe} from "../../../../core/pipe/filter-pipe/filter-games-by-genre.pipe";
import {SpinnerComponent} from "../../../../shared/spinner/spinner.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "../../../../core/interceptor/loading.interceptor";

@NgModule({
    declarations: [
        GameListComponent, GameNameFilterPipe, GameGenreFilterPipe, SpinnerComponent
    ],
    exports: [
        GameListComponent
    ],
  imports: [
    CommonModule,
    GameElementModule,
    NgxPaginationModule,
    FormsModule
  ],  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
})
export class GameListModule { }
