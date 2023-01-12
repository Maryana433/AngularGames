import {Component} from '@angular/core';
import {GameService} from "../../../../core/api/game.service";
import {Game} from "../../../../core/interface/Game";
import {GameTag} from "../../../../core/game-tag";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent{

  public games: Array<Game> = [];
  currentPage: number = 1;
  searchText:string = '';
  totalItems:number = 200;
  itemsPerPage:number = 20;
  allGames:Array<Game> = [];
  currentTag: keyof typeof GameTag = 'ALL';

  constructor(private gameService: GameService) {
    this.getAllGames();
  }

  onTableDataChange(event: any) {
    this.currentPage = event;
  }

  calculateTotalItems(searchText: string) {
    let totalItems =  this.allGames.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) && it.genres?.includes(this.currentTag);
    }).length;
    console.log("Total items filtered " + totalItems);
    return totalItems;
  }


  getAllGames(){
    for (let i = 1; i <= 20; i++) {
      this.gameService.getGamesPage(i).subscribe(
        (data) => {
          let rawGames = data.results;
          rawGames.forEach((el:any) => {
            let {name, background_image, id, genres}: Game = el;
            let nameOfTags:Array<string> = [];
            // @ts-ignore
            genres.forEach((genre:any) => nameOfTags.push(genre.name));
            let game: Game = {name, background_image, id};
            game.genres = nameOfTags;
            this.allGames.push(game);
          })
        }
      );
    }
    console.log("All Games")
    console.log(this.allGames)
  }


  getAllTags():Array<string>{
    return Object.keys(GameTag).filter((tag) => isNaN(Number(tag)) && tag.toString() != 'ALL');
  }

  changeTag(tag:string) {
    if(this.currentTag.toString() === tag)
      this.currentTag = 'ALL';
    else
      this.currentTag = tag as keyof typeof GameTag;
  }
}
