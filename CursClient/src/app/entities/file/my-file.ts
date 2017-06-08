import {Torrent} from "../torrent/torrent";
export class MyFile{
  public id: number;
  public name: string;
  public file: string;
  public type: string;
  public torrent: Torrent;


  constructor() {
  }
}
