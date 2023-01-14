export interface GameInfo{
  name:string;
  description:string;
  metacritic:number;
  metacriticPlatforms:Array<String>;
  released:Date;
  background_image:string;
  genreNames:Array<String>;
  publisherNames:Array<String>;
  website:string;
}
