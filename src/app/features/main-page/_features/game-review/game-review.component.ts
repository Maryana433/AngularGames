import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../../core/service/api/game.service";
import {EsrbRating, GameInfo, MetacriticPlatform} from "../../../../core/interface/game-info";
import {GameReviewInfo} from "../../../../core/interface/game-review-info";
import {ESRBRating} from "../../../../core/enum/esrbrating";

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit{

  id:number = 0;
  gameInfo!:GameReviewInfo;
  gameScreenshots:Array<string> = [];

  constructor(private readonly activatedRoute:ActivatedRoute,
              private readonly gameService:GameService,
              private readonly changeDetectorRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.fetchGameInfo();
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('review');
    // @ts-ignore
    top.scrollIntoView();
  }


  fetchGameInfo(){
    this.gameService.getGameInfoById(this.id).subscribe((data)=>{

    let rawGameInfo:GameInfo = data;
    let {name, description, metacritic, website, background_image, released,
      platforms, publishers, genres, playtime} = rawGameInfo;

    let gameRating:keyof typeof ESRBRating = rawGameInfo.esrb_rating == null ? "No info": rawGameInfo.esrb_rating.name;

    this.gameInfo = {name,description, metacritic, website,background_image, released,playtime,
      esrb_rating : gameRating,
      publisherNames: publishers.map(el => el.name),
      genreNames : genres.map(el => el.name),
      platforms: platforms.map(el => el.platform.name)};

    });

    this.gameService.getGameScreenshotsById(this.id).subscribe((data) => {

      data.results.forEach((el) => {
        this.gameScreenshots.push(el.image)
      })
    });
    this.changeDetectorRef.detectChanges();
  }

   removeHtmlTags(str:string):string {

    let re = /<[^>]*>/g;
    return str.replaceAll(re, " ");
  }



}
