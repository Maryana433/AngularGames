export interface Screenshot{
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface GameScreenshotsInfo {
  count: number;
  next?: any;
  previous?: any;
  results: Screenshot [];
}
