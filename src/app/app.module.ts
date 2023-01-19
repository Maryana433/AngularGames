import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {GameReviewModule} from "./features/main-page/_features/game-review/game-review.module";
import {CacheInterceptor} from "./core/interceptor/cache-interceptor";
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./features/main-page/_features/router/reuse-strategy";
import {LoadingInterceptor} from "./core/interceptor/loading.interceptor";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";



@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule,
      CommonModule, NgxPaginationModule, GameReviewModule],
    declarations: [AppComponent, LoadingSpinnerComponent],
    bootstrap: [AppComponent],
    providers:[
    {
      provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi:true
    },
    {
      provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy
    },
      {
        provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
      }
    ]
})
export class AppModule {}
