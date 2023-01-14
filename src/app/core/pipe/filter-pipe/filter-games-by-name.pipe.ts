import {Pipe, PipeTransform} from "@angular/core";
import {Game} from "../../interface/game";

@Pipe({ name: 'gameNameFilter' })
export class GameNameFilterPipe implements PipeTransform {

  transform(items: Game[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    console.log(searchText);
    searchText = searchText.toLowerCase();

    let result = items.filter(it =>it.name.toLocaleLowerCase().includes(searchText));
    console.log(result);

    return result;
  }
}
