import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/api/game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private gameService: GameService) {}

  myFunc() {
    console.log('hej');
    let payload;
    this.gameService.getGames().subscribe((data) => console.log(data));
  }

  ngOnInit() {}
}
