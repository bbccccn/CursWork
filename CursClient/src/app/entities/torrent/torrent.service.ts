import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Torrent} from "./torrent";

@Injectable()
export class TorrentService {
  private mock: [Torrent] = [
    new Torrent(0, "COD:BO", "TOP GAME, GOTY, 10/10!!111", null, "2014-07-15", 1, "published"
    ),
    new Torrent(1, "COD:BO2", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    ),
    new Torrent(2, "COD:AW", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    ),
    new Torrent(3, "COD:AW2", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    ),
    new Torrent(4, "COD:MW", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    )
  ];

  constructor(private http:Http) {}

  public getAllTorrentsByCategory(id: number): [Torrent]{
    return this.mock;
  }

  public getTorrentById(id: number): Torrent{
    return this.mock[id];
  }
}
