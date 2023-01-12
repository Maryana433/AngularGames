import {Pipe, PipeTransform} from '@angular/core';
import {Game} from "../interface/Game";
import {GameTag} from "../game-tag";

@Pipe({
  name: 'tagPipe'
})
export class TagPipe implements PipeTransform {

  transform(items: Game[], searchTag: keyof typeof GameTag): any[] {
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
