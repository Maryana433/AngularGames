import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root',
})
// https://api.rawg.io/docs/
export class GameService {
  private ApiParams: HttpParams = new HttpParams().set('key', environment.APIKey);
  private baseURL : string = environment.APIURL;

  constructor(private httpClient: HttpClient) {}

  getGameInfoById(id:number):Observable<any>{
    return this.httpClient.get<Object[]>(this.baseURL + 'games/' + id, {
      params: this.ApiParams,
    });
  }

  getGamesPerPage(page:number): Observable<any> {
    return this.httpClient.get<Object[]>(this.baseURL + 'games', {
      params: this.ApiParams.set('page',page),
    });
  }





}
