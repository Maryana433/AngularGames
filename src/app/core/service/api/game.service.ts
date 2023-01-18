import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {GameAllResults, GameInfo} from "../../interface/game-info";
import {GameScreenshotsInfo} from "../../interface/game-screenshots";
import {shareReplay} from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
// https://api.rawg.io/docs/
export class GameService {
  private ApiParams: HttpParams = new HttpParams().set('key', environment.APIKey);
  private baseURL : string = environment.APIURL;

  constructor(private httpClient: HttpClient) {}

  getGameInfoById(id:number):Observable<GameInfo>{
    return this.httpClient.get<GameInfo>(this.baseURL + 'games/' + id, {
      params: this.ApiParams,
    });
  }

   getGamesPerPage(page:number): Observable<GameAllResults> {
    return this.httpClient.get<GameAllResults>(this.baseURL + 'games', {
      params: this.ApiParams.set('page',page),
    });
  }

  getGameScreenshotsById(id:number):Observable<GameScreenshotsInfo>{
    return this.httpClient.get<GameScreenshotsInfo>(this.baseURL + 'games/' + id + "/screenshots", {
      params: this.ApiParams,
    });
  }





}
