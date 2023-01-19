import {Pipe, PipeTransform} from '@angular/core';
import {GameItem} from "../../../core/interface/game-item";
import {GameGenre} from "../../../core/enum/game-genre";

@Pipe({
  name: 'gameGenreFilter'
})
export class GameGenreFilterPipe implements PipeTransform {

  transform(items: GameItem[], searchTag: keyof typeof GameGenre): any[] {
    if (!items) {
      return [];
    }

    if (!searchTag || searchTag === 'ALL') {
      return items;
    }

    let filteredGames:GameItem[] = [];

    items.forEach((game:GameItem) => {
      if(game.genres?.includes(searchTag))
        filteredGames.push(game);
    })

    return filteredGames;
  }

}
