import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {Game} from "../../../../core/interface/game";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  games: Array<Game> = [];
  currentGame:Game|any;
  timeToChange:number = 10000;

  constructor(private gameService:GameService) {
  }

  ngOnInit() {
    this.fetchGameImagesAndStartCarousel();
  }

  fetchGameImagesAndStartCarousel(){
      this.gameService.getGamesPerPage(2).subscribe((data) => {
        this.games = data.results;
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
