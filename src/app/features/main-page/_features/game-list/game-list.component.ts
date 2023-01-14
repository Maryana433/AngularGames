import {Component} from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {Game} from "../../../../core/interface/game";
import {GameGenre} from "../../../../core/enum/game-genre";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent{

  public games: Array<Game> = [];
  currentPage: number = 1;
  searchText:string = '';
  totalItems:number = 600;
  itemsPerPage:number = 20;
  allGames:Array<Game> = [];
  currentTag: keyof typeof GameGenre = 'ALL';

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
    for (let i = this.totalItems/this.itemsPerPage; i >= 1; i--) {
      this.gameService.getGamesPerPage(i).subscribe(
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

  getAllGenres():Array<string>{
    return Object.keys(GameGenre).filter((tag) => isNaN(Number(tag)) && tag.toString() != 'ALL');
  }

  changeGenre(tag:string) {
    if(this.currentTag.toString() === tag)
      this.currentTag = 'ALL';
    else
      this.currentTag = tag as keyof typeof GameGenre;
  }
}
