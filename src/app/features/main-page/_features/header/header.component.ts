import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../../core/api/game.service";
import {Game} from "../../../../core/interface/Game";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  games: Array<Game> = [];
  game:Game|any;
  isVisibleHeader:boolean = false;
  timeToChange:number = 10000;


  constructor(private gameService:GameService) {
  }

  ngOnInit() {
    this.fetchGameImages();
  }

  fetchGameImages(){
      this.gameService.getGames().subscribe((data) => {
        this.games = data.results;
        this.carousel();
      });
  }


  carousel() {
      let randomIndex = Math.floor(Math.random() * this.games.length);
      this.game = this.games[randomIndex];
      console.log("Random game - header : " + this.game.name);
      this.isVisibleHeader = true;
      setTimeout(() => this.carousel(), this.timeToChange);
  }

}
