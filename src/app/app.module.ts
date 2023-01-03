import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';
import {CommonModule} from "@angular/common";
import {CustomPipe} from "./core/pipe/custom-pipe.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule, CommonModule],
  declarations: [AppComponent, CustomPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
