import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler,
  HttpEvent, HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private static cache: Map<string, HttpResponse<any>> = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (req.method !== "GET" || !req.params.toString().includes("page")) {
      return next.handle(req)
    }

      const cachedResponse: HttpResponse<any> | undefined = CacheInterceptor.cache.get(req.params.toString())

      if (cachedResponse != null) {
        return of(cachedResponse)
      } else {
        return next.handle(req).pipe(
          tap(stateEvent => {
            if (stateEvent instanceof HttpResponse) {
              CacheInterceptor.cache.set(req.params.toString(), stateEvent)
              console.log("set cache, current size of cache" + Array.from(CacheInterceptor.cache.keys()).length);
            }
          })
        )
      }
  }

}
