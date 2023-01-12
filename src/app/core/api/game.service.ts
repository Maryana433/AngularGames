import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GameService {
  private ApiKey: string = 'fde0cbe6f6e04d07bde995ce0ed99417';
  private ApiParams: HttpParams = new HttpParams().set('key', this.ApiKey);
  //https://api.rawg.io/docs/
  private baseURL: string = 'https://api.rawg.io/api/';

  constructor(private httpClient: HttpClient) {}

  getGames(): Observable<any> {
    return this.httpClient.get<Object[]>(this.baseURL + 'games', {
      params: this.ApiParams,
    });
  }

  getGameInfo(id:number):Observable<any>{
    return this.httpClient.get<Object[]>(this.baseURL + 'games/' + id, {
      params: this.ApiParams,
    });
  }

  getGamesPage(page:any): Observable<any> {
    return this.httpClient.get<Object[]>(this.baseURL + 'games', {
      params: new HttpParams().set('key', this.ApiKey).set('page',page),
    });
  }





}
