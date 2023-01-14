import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';
import {CommonModule} from "@angular/common";
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {LoadingInterceptor} from "./core/interceptor/loading.interceptor";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule, CommonModule, NgxPaginationModule],
    declarations: [AppComponent, SpinnerComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
        }
    ],
    exports: [
        SpinnerComponent
    ]
})
export class AppModule {}
