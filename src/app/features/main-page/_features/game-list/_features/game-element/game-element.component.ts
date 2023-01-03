import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-element',
  templateUrl: './game-element.component.html',
  styleUrls: ['./game-element.component.css']
})
export class GameElementComponent {


  @Input()
  public gameName: any = null;

  @Input()
  public gameImage: any = null;

  @Input()
  public gameId: any = null;


}
