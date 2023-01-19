import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {AllGameResults, GameData} from "../../interface/game-data";
import {GameScreenshotsInfo} from "../../interface/game-screenshots-data";
import {map} from "rxjs/operators";
import {GameReview} from "../../interface/game-review";
import {ESRBRating} from "../../enum/esrbrating";
import {GameCarouselImage} from "../../interface/game-carousel-image";
import {GameItem} from "../../interface/game-item";

@Injectable({
  providedIn: 'root',
})
// https://api.rawg.io/docs/
export class GameService {

  private ApiParams: HttpParams = new HttpParams().set('key', environment.APIKey);
  private baseURL : string = environment.APIbaseURL;

  constructor(private httpClient: HttpClient) {}

  getCarouselGamesImagesPerPage(page:number): Observable<GameCarouselImage[]> {
    return this.httpClient.get<AllGameResults>(this.baseURL + 'games', {
      params: this.ApiParams.set('page',page)}).pipe(
      map(response => {
        let gamesScreensInfo:GameCarouselImage[] = [];
        response.results.forEach(el =>
          gamesScreensInfo.push({id:el.id, background_image:el.background_image}))
        return gamesScreensInfo;
      }))
  }

  getGamesListDataPerPage(page:number): Observable<GameItem[]> {
    return this.httpClient.get<AllGameResults>(this.baseURL + 'games', {
      params: this.ApiParams.set('page',page),
    }).pipe(map(response => {
        let gameElementsInfo:GameItem[] = [];
        response.results.forEach((el) => {
          let genres: Array<string> = el.genres.map(genre => genre.name);
          let {background_image, name, id} = el;
          gameElementsInfo.push({background_image, name, id, genres});
        })
        return gameElementsInfo;
     }));
  }

  getGameReviewById(id:number):Observable<GameReview>{
    return this.httpClient.get<GameData>(this.baseURL + 'games/' + id, {
      params: this.ApiParams,
    }).pipe(
      map(response => {
        return this.transformAllGameInfoToRequiredReviewInf(response);
      })
    );
  }

  getGameScreenshotsById(id:number):Observable<string[]>{
    return this.httpClient.get<GameScreenshotsInfo>(this.baseURL + 'games/' + id + "/screenshots", {
      params: this.ApiParams,
    }).pipe(
      map(response => {
          return response.results.map(el => el.image);;
        }));
  }




  private transformAllGameInfoToRequiredReviewInf(allGameInfo:GameData):GameReview{
    let {name, description, metacritic, website, background_image, released,
      platforms, publishers, genres, playtime} = allGameInfo;
    let gameRating:keyof typeof ESRBRating = allGameInfo.esrb_rating == null ? "No info": allGameInfo.esrb_rating.name;
    let gameReviewInfo:GameReview = {
      name,description, metacritic, website,background_image, released,playtime,
      esrb_rating : gameRating,
      publisherNames: publishers.map(el => el.name),
      genreNames : genres.map(el => el.name),
      platforms: platforms.map(el => el.platform.name)
    };

    return gameReviewInfo;
  }



}
