import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../../core/api/game.service";
import {firstValueFrom} from "rxjs";

interface GameInfo{
  name:string;//
  description:string;//
  metacritic:number;//
  metacriticPlatforms:Array<String>;//
  released:Date;//
  background_image:string;//
  genreNames:Array<String>;
  publisherNames:Array<String>;
  website:string;//
}

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit{


  name:Array<String> = ['a','s'];

  id:number = 0;
  //https://stackoverflow.com/questions/68615939/angular-error-ts2532-object-is-possibly-undefined
  gameInfo!:GameInfo;

  constructor(private activatedRoute:ActivatedRoute,
              private gameService:GameService,
              private changeDetectorRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getGameInfo();
  }

  async getGameInfo(){

    const rawGame = await firstValueFrom(this.gameService.getGameInfo(this.id));

    let {name,description,metacritic,website,metacritic_platforms,
      released,background_image,genres,publishers} = rawGame;

    let metacriticPlatforms:Array<String> = [];
    for (let i = 0; i < metacritic_platforms.length; i++) {
      metacriticPlatforms.push(metacritic_platforms[i].platform.name);
    }


    let publisherNames:Array<String> = [];
    for (let i = 0; i < publishers.length; i++) {
      publisherNames.push(publishers[i].name);
    }


    let genreNames:Array<String> = [];
    for (let i = 0; i < genres.length; i++) {
      genreNames.push(genres[i].name);
    }


    this.gameInfo = {name,description,website,metacritic,metacriticPlatforms,
      released,background_image,genreNames,publisherNames};

    this.changeDetectorRef.detectChanges();

    console.log(this.gameInfo)
  }

   removeHtmlTags(str:string):string {
    let re = /<[^>]*>/g;
    return str.replaceAll(re, " ");
  }



}
