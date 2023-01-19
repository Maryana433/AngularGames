import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../../core/service/api/game.service";
import {GameReview} from "../../../../core/interface/game-review";

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit{

  id:number = 0;
  gameInfo!:GameReview;
  gameScreenshots:Array<string> = [];

  constructor(private readonly activatedRoute:ActivatedRoute,
              private readonly gameService:GameService,
              private readonly changeDetectorRef:ChangeDetectorRef) {
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.fetchGameInfo();
  }

  ngAfterViewInit() {
    // Scrolls to top of Page after page view initialized
    let top = document.getElementById('review');
    // @ts-ignore
    top.scrollIntoView();
  }


  fetchGameInfo(){
    this.gameService.getGameReviewById(this.id).subscribe((data)=>{
      this.gameInfo = data;
    });
    this.gameService.getGameScreenshotsById(this.id).subscribe((data) => {
        this.gameScreenshots = data;
    });
    this.changeDetectorRef.detectChanges();
  }

   removeHtmlTags(str:string):string {
    let re = /<[^>]*>/g;
    return str.replaceAll(re, "");
  }


}
