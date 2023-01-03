import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';;
import { GameReviewComponent } from './game-review.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MainPageModule} from "../../main-page.module";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule, CommonModule],
  declarations: [GameReviewComponent],
})
export class GameReviewModule {


}
