import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{

  loading$ = this.loader.loading$;

  constructor(private loader: LoaderService) {
  }


}
