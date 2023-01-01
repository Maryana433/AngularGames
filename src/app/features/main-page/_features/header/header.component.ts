import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  index:number = 0;

  constructor() {
  }


  ngOnInit() {
    this.carousel();
  }

  //https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
  carousel() {

      let x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      if (this.index >= x.length) {
        this.index = 0;
      }
      console.log(this.index);
      x[this.index].style.display = "block";
    this.index++;

    setTimeout(() => this.carousel(), 15000);
  }

}
