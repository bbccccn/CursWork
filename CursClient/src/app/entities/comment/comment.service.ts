import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Comment} from "./comment";
import {Observable} from "rxjs";

@Injectable()
export class CommentService {
  private mock: [Comment] = [
    new Comment(1, "message1", "timestamp"),
    new Comment(2, "message2", "timestamp"),
    new Comment(1, "message3", "timestamp"),
    new Comment(2, "message4", "timestamp"),
    new Comment(2, "message5", "timestamp")
  ];

  constructor(private http: Http) {}

  public getCommentsForTorrentById(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/comments/' + id);
  }
}
