import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';
import {CommonModule} from "@angular/common";
import {CustomPipe} from "./core/pipe/custom-pipe.pipe";
import { SpinnerComponent } from './core/spinner/spinner.component';
import {LoadingInterceptor} from "./core/loading.interceptor";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule, CommonModule],
  declarations: [AppComponent, CustomPipe, SpinnerComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
})
export class AppModule {}
