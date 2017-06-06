import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Comment} from "./comment";
import {Observable} from "rxjs";

@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  public getCommentsForTorrentById(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/comments/' + id);
  }
}
