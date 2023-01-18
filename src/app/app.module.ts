import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {GameReviewModule} from "./features/main-page/_features/game-review/game-review.module";



@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule,
      CommonModule, NgxPaginationModule, GameReviewModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
