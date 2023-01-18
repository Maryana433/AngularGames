import {ESRBRating} from "../enum/esrbrating";

export interface GameReviewInfo{
  name:string;
  description:string;
  metacritic:number;
  platforms:Array<String>;
  released:string;
  background_image:string;
  genreNames:Array<String>;
  publisherNames:Array<String>;
  website:string;
  playtime:number;
  esrb_rating:keyof typeof ESRBRating
}


