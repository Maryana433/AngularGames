import { Component } from '@angular/core';
import {GameService} from "../../../../core/api/game.service";
import {firstValueFrom} from "rxjs";

export interface Game{
  background_image:string,
  name:string;
  id:number;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  public games: Array<Game> = [];

  currentPage: any = 3;

  constructor(private gameService: GameService) {
    this.fetchGames();
  }

  fetchGames(): void {
    this.gameService.getGamesPage(this.currentPage).subscribe(
      (response) => {
        this.games.splice(0);
        let rawGames = response.results;
        for (let i = 0; i < rawGames.length; i++) {
          let {name, background_image, id}: Game = rawGames[i];
          let game: Game = {name, background_image, id};
          this.games.push(game);
        }
        console.log("GAMES")
        console.log(this.games)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.currentPage = event;
    this.fetchGames();
  }
}
