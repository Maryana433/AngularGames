import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from "./_features/game-list/game-list.component";
import {GameReviewComponent} from "./_features/game-review/game-review.component";

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: ':id', component: GameReviewComponent},
  { path: '**', component: GameListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingRoutingModule { }
