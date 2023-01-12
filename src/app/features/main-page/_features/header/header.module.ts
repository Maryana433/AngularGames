import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {LinkImageModule} from "../../../../shared/link-image/link-image.module";

@NgModule({
  imports: [CommonModule, LinkImageModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
