import {Pipe, PipeTransform} from "@angular/core";
import {GameItem} from "../../../core/interface/game-item";

@Pipe({ name: 'gameNameFilter' })
export class GameNameFilterPipe implements PipeTransform {

  transform(items: GameItem[], searchText: string): any[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    let result = items.filter(it =>it.name.toLocaleLowerCase().includes(searchText));

    return result;
  }
}
