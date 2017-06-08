import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Torrent} from "./torrent";
import {Observable} from "rxjs";

@Injectable()
export class TorrentService {
  private url: string = "http://localhost:8080/api/torrents/";

  constructor(private http: Http) {}

  public getTorrentById(id: any): Observable<any>{
    return this.http.get(this.url + id);
  }

  public saveTorrent(torrent: Torrent): Observable<any>{
    console.log(JSON.stringify(torrent));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let response;
    return this.http.post(this.url, JSON.stringify(torrent), options);
  }
}
