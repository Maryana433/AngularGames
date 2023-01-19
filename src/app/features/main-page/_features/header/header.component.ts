import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {GameItem} from "../../../../core/interface/game-item";
import {GameData} from "../../../../core/interface/game-data";
import {environment} from "../../../../../environments/environment";
import {GameCarouselImage} from "../../../../core/interface/game-carousel-image";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  games: Array<GameCarouselImage> = [];
  currentGame:GameItem|any;
  timeToChange:number = 10000;
  randomPage:number;

  constructor(private gameService:GameService) {
    this.randomPage = Math.floor(Math.random() * (environment.pagesToDownload - 1)) + 1;
    this.fetchGameImagesAndStartCarousel();
  }

  ngOnInit() {
  }

  fetchGameImagesAndStartCarousel(){
      this.gameService.getCarouselGamesImagesPerPage(this.randomPage).subscribe(
        (data) => {
            this.games = data;
        },
        ()=> {},
        () => {
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
