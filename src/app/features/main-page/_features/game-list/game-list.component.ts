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

  constructor(private gameService: GameService) {
    this.fetchGameFacts();
  }

  async fetchGameFacts() {

    let rawGames:any[];
    const payload = await firstValueFrom(this.gameService.getGames());
    console.log(payload);

    rawGames = payload.results;
    for (let i = 0; i < rawGames.length; i++) {
      let {name,background_image,id}:Game = rawGames[i];
      let game:Game = {name,background_image,id};
      this.games.push(game);
    }

    console.log(this.games)
  }

}
