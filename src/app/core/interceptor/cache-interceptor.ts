import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private cache: Map<string, HttpResponse<any>> = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method !== "GET" || !req.params.toString().includes("page")) {
      return next.handle(req)
    }

    const cachedResponse: HttpResponse<any> | undefined = this.cache.get(req.params.toString())

    if (cachedResponse != null)
      return of(cachedResponse);

    return next.handle(req).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          this.cache.set(req.params.toString(), response)
          console.log("set cache, current size of cache" + Array.from(this.cache.keys()).length);
        }
      })
    )
  }

}
