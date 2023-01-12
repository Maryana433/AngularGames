import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler,
  HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { LoaderService } from './loader.service';

//https://danielk.tech/home/angular-how-to-add-a-loading-spinner
//https://zoaibkhan.com/blog/how-to-add-loading-spinner-in-angular-with-rxjs/

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }

}
