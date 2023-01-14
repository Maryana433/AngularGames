import {Pipe, PipeTransform} from '@angular/core';
import {Game} from "../../interface/game";
import {GameGenre} from "../../enum/game-genre";

@Pipe({
  name: 'gameGenreFilter'
})
export class GameGenreFilterPipe implements PipeTransform {

  transform(items: Game[], searchTag: keyof typeof GameGenre): any[] {
    if (!items) {
      return [];
    }
    if (!searchTag || searchTag === 'ALL') {
      return items;
    }
    console.log(searchTag);

    let filteredGames:Game[] = [];
    items.forEach((game:Game) => {
      console.log('searchTag - ' + searchTag);
      if(game.genres?.includes(searchTag))
        filteredGames.push(game);
    })

    console.log(filteredGames);

    return filteredGames;
  }

}
