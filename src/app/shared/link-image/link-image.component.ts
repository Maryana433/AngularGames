import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-image',
  templateUrl: './link-image.component.html',
  styleUrls: ['./link-image.component.css']
})
export class LinkImageComponent {

  @Input()
  public link: string|number = '';

  @Input()
  public image: string = '';

  @Input()
  public styles: any = null;



}
