import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from "../../../../core/service/api/game.service";
import {GameElementInfo} from "../../../../core/interface/game-element-info";
import {GameGenre} from "../../../../core/enum/game-genre";
import {GameAllResults, GameInfo} from "../../../../core/interface/game-info";

interface c{
  id:number;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy{

  currentPage: number = 1;
  searchText:string = '';
  totalItems:number = 600;
  itemsPerPage:number = 20;
  allGames:Array<GameElementInfo> = [];
  currentFilterGenre: keyof typeof GameGenre = 'ALL';
  loading:boolean = true;

  constructor(private gameService: GameService) {
    this.getAllGames();
  }

  ngOnInit(): void {
    console.log("GameListComponent :: ngOnInit");
  }

    ngOnDestroy():void{
      console.log("GameListComponent :: ngOnDestroy");
    }

  getAllGames() {
    for (let i = 1; i <= this.totalItems/this.itemsPerPage; i++) {
      this.gameService.getGamesPerPage(i)
        .subscribe((data) => {
            data.results.forEach((gameInfo:GameInfo) => {
              let genres:Array<string> = gameInfo.genres.map(genre => genre.name);
              let {background_image, name, id} = gameInfo;
              // @ts-ignore
              this.allGames.push({background_image,name,id,genres});
            })
          },
          ()=>{},
          ()=>{
            if(this.allGames.length === this.totalItems) {
              this.allGames = this.allGames.sort((a, b) => a.id - b.id)
              this.loading = false;
            }
          }
        );
    }
  }

  onTableDataChange(event: any) {
    this.currentPage = event;
  }

  calculateTotalItems(searchText: string) {
    let totalItems =  this.allGames.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) && it.genres?.includes(this.currentFilterGenre);
    }).length;
    return totalItems;
  }

  getAllGenres():Array<string>{
    return Object.keys(GameGenre).filter((tag) => isNaN(Number(tag)) && tag.toString() != 'ALL');
  }

  changeGenre(tag:string) {
    if(this.currentFilterGenre.toString() === tag)
      this.currentFilterGenre = 'ALL';
    else
      this.currentFilterGenre = tag as keyof typeof GameGenre;
  }
}
