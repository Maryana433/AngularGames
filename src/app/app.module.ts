import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageModule } from './features/main-page/main-page.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MainPageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
