import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-element',
  templateUrl: './game-element.component.html',
  styleUrls: ['./game-element.component.css']
})
export class GameElementComponent {


  @Input()
  public gameName: string = '';

  @Input()
  public gameImage: string = '';

  @Input()
  public gameId: number = 0;


}
