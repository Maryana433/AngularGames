import {Pipe, PipeTransform} from '@angular/core';
import {GameElementInfo} from "../../interface/game-element-info";
import {GameGenre} from "../../enum/game-genre";

@Pipe({
  name: 'gameGenreFilter'
})
export class GameGenreFilterPipe implements PipeTransform {

  transform(items: GameElementInfo[], searchTag: keyof typeof GameGenre): any[] {
    if (!items) {
      return [];
    }
    if (!searchTag || searchTag === 'ALL') {
      return items;
    }
    console.log(searchTag);

    let filteredGames:GameElementInfo[] = [];
    items.forEach((game:GameElementInfo) => {
      console.log('searchTag - ' + searchTag);
      if(game.genres?.includes(searchTag))
        filteredGames.push(game);
    })

    console.log(filteredGames);

    return filteredGames;
  }

}
