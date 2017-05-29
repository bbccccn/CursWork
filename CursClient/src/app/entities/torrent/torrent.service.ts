import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Torrent} from "./torrent";
import {Observable} from "rxjs";

@Injectable()
export class TorrentService {
  private mock: [Torrent] = [
    new Torrent(0, "COD:BO", "TOP GAME, GOTY, 10/10!!111", null, "2014-07-15", 1, "published"
    ),
    new Torrent(1, "COD:BO2", "TOP GAME, GOTY, 10/10!!111", "2015-09-10", "2013-01-15", 1, "published"
    ),
    new Torrent(2, "COD:AW", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    ),
    new Torrent(3, "COD:AW2", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    ),
    new Torrent(4, "COD:MW", "TOP GAME, GOTY, 10/10!!111"//, null, null, null, null
    )
  ];

  constructor(private http: Http) {}

  public getTorrentById(id: any): Observable<any>{
    return this.http.get("http://localhost:8080/api/torrents/" + id);
  }
}
