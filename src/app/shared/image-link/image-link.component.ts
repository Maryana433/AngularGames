import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-image',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css']
})
export class ImageLinkComponent {

  @Input()
  public link: string|number = '';

  @Input()
  public image: string = '';

  @Input()
  public styles: any = null;



}
