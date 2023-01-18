import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {LinkImageModule} from "../../../../shared/link-image/link-image.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "../../../../core/interceptor/loading.interceptor";
import {SpinnerComponent} from "../../../../shared/spinner/spinner.component";

@NgModule({
  imports: [CommonModule, LinkImageModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
