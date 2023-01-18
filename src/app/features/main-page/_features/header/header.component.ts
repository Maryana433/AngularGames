import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {GameElementInfo} from "../../../../core/interface/game-element-info";
import {GameInfo} from "../../../../core/interface/game-info";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  games: Array<GameElementInfo> = [];
  currentGame:GameElementInfo|any;
  timeToChange:number = 10000;
  page:number;

  constructor(private gameService:GameService) {
    this.page = Math.floor(Math.random() * 29) + 1;
  }

  ngOnInit() {
    this.fetchGameImagesAndStartCarousel();
  }

  fetchGameImagesAndStartCarousel(){
      this.gameService.getGamesPerPage(this.page).subscribe((data) => {

        let allGamesInfo:GameInfo[] = data.results;

        for (let i = 0; i < allGamesInfo.length; i++) {
            let allGameInfo:GameInfo = allGamesInfo[i];
            let genres:Array<string> = allGameInfo.genres.map((genre) => genre.name);
            let {background_image, name, id} = allGameInfo;
            // @ts-ignore
            this.games.push({background_image,name,id,genres});
        }

        this.carousel();
      });
  }

  carousel() {
      let randomIndex = Math.floor(Math.random() * this.games.length);
      this.currentGame = this.games[randomIndex];
      console.log("Random game - header : " + this.currentGame.name);
      setTimeout(() => this.carousel(), this.timeToChange);
  }
}
