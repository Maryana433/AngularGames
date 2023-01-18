import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { HeaderModule } from './_features/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import {MainPageRoutingRoutingModule} from "./main-page-routing.module";
import {GameListModule} from "./_features/game-list/game-list.module";
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./reuse-strategy";

@NgModule({
  imports: [CommonModule, NavbarModule, HeaderModule,FooterModule,MainPageRoutingRoutingModule,
    GameListModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy}
  ]
})
export class MainPageModule {}
