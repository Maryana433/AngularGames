import {Component} from '@angular/core';
import { LoaderService } from '../../core/service/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

  loading$ = this.loader.loading$;

  constructor(private loader: LoaderService) {
  }

}
