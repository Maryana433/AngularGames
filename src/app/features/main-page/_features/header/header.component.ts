import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../../core/api/game.service";
import {Game} from "../game-list/game-list.component";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public games: Array<Game> = [];

  public game:Game|any;

  index:number = 0;

  isVisibleHeader:number = 0;


  gameImageElements:HTMLCollectionOf<HTMLElement>|any = []

  constructor(private gameService:GameService) {
  }


  ngOnInit() {
      let dataGames: Array<Game|any>= [];
      this.gameService.getGames().subscribe((data) => {
          dataGames = data.results;
          for (let i = 0; i < dataGames.length; i++) {
              let {name, background_image, id}: Game = dataGames[i];
              let game: Game = {name, background_image, id};
              this.games.push(game);
          }
          console.log(this.games);
          this.carousel();
        });
    }


  //https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
  carousel() {
      let i = Math.floor(Math.random() * this.games.length);
      this.game = this.games[i];
      console.log(this.game);
      this.isVisibleHeader = 1;
      setTimeout(() => this.carousel(), 10000);
  }

}
