import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../../core/api/game.service";

interface GameInfo{
  name:string;
  description:string;
  metacritic:number;
  metacriticPlatforms:Array<String>;
  released:Date;
  background_image:string;
  genreNames:Array<String>;
  publisherNames:Array<String>;
  website:string;
}

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit{


  id:number = 0;
  gameInfo!:GameInfo;

  constructor(private activatedRoute:ActivatedRoute,
              private gameService:GameService,
              private changeDetectorRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.fetchGamesInfo();
  }


  fetchGamesInfo(){
    let rawGameInfo:any;
    this.gameService.getGameInfo(this.id).subscribe((data)=>{
        rawGameInfo = data;

    let {name,description,metacritic,website,metacritic_platforms,
      released,background_image,genres,publishers} = rawGameInfo;

    let metacriticPlatforms:Array<String> = [];
    let publisherNames:Array<String> = [];
    let genreNames:Array<String> = [];
    metacritic_platforms.forEach((el:any) => metacriticPlatforms.push(el.platform.name));
    publishers.forEach((el:any) => publisherNames.push(el.name));
    genres.forEach((el:any) => genreNames.push(el.name));

    this.gameInfo = {name,description,website,metacritic,metacriticPlatforms,
        released,background_image,genreNames,publisherNames};

    });


    this.changeDetectorRef.detectChanges();
    console.log("Game info of this page : " + this.gameInfo);
  }




   removeHtmlTags(str:string):string {
    let re = /<[^>]*>/g;
    return str.replaceAll(re, " ");
  }



}
