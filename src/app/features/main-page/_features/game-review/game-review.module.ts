import { NgModule } from '@angular/core';
import { GameReviewComponent } from './game-review.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainPageModule} from "../../main-page.module";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {LoadingInterceptor} from "../../../../core/interceptor/loading.interceptor";
import {LoadingSpinnerComponent} from "../../../../shared/loading-spinner/loading-spinner.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule, CommonModule],
  declarations: [GameReviewComponent]
})
export class GameReviewModule {


}
