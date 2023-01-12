import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { HeaderModule } from './_features/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import {GameListModule} from "./_features/game-list/game-list.module";
import {MainPageRoutingRoutingModule} from "./main-page-routing.module";

@NgModule({
  imports: [CommonModule, NavbarModule, HeaderModule, FooterModule, GameListModule, MainPageRoutingRoutingModule,
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule {}
