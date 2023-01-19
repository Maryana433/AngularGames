import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterModule, Routes,} from '@angular/router';
import {GameListComponent} from "../game-list/game-list.component";
import {GameReviewComponent} from "../game-review/game-review.component";

const routes: Routes = [
  { path: '', component: GameListComponent, data: { reuseRoute: true },},
  { path: 'review/:id', component: GameReviewComponent},
  { path: '**', component: GameListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class MainPageRoutingRoutingModule {

}





