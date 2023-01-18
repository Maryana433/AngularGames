import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterModule, Routes,} from '@angular/router';
import {GameListComponent} from "./_features/game-list/game-list.component";
import {GameReviewComponent} from "./_features/game-review/game-review.component";

const routes: Routes = [
  { path: '', component: GameListComponent, data: { reuseRoute: true },},
  { path: 'review/:id', component: GameReviewComponent},
  // { path: '**', component: GameListComponent}
];

//{scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingRoutingModule {

}





