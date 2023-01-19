import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {GameItem} from "../../../../core/interface/game-item";
import {GameGenre} from "../../../../core/enum/game-genre";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  currentPage: number = 1;
  searchGameName:string = '';
  itemsPerPage:number = 20;
  totalItems:number = this.itemsPerPage * environment.pagesToDownload;
  allGames:Array<GameItem> = [];
  currentFilterGenre: keyof typeof GameGenre = 'ALL';

  constructor(private gameService: GameService) {
    this.getAllGames();
  }

  getAllGames() {
    for (let i = 1; i <= environment.pagesToDownload; i++) {
      this.gameService.getGamesListDataPerPage(i)
        .subscribe((data) => {
            this.allGames = this.allGames.concat(data);
          },
          ()=>{},
          ()=>{
            if(this.allGames.length === this.totalItems) {
              this.allGames = this.allGames.sort((a, b) => a.id - b.id)
            }});
    }
  }

  onPageChange(event: any) {
    this.currentPage = event;
  }

  calculateFilteredTotalItems(searchText: string) {
    let totalItems =  this.allGames.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) && it.genres?.includes(this.currentFilterGenre);
    }).length;
    return totalItems;
  }

  getAllGenres():Array<string>{
    return Object.keys(GameGenre).filter((tag) => isNaN(Number(tag)) && tag.toString() != 'ALL');
  }

  changeGenre(genre:string) {
    if(this.currentFilterGenre.toString() === genre)
      this.currentFilterGenre = 'ALL';
    else {
      this.currentPage = 1;
      this.currentFilterGenre = genre as keyof typeof GameGenre;
    }
  }
}
