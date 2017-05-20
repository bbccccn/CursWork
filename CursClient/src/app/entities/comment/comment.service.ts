import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Comment} from "./comment";

@Injectable()
export class CommentService {
  private mock: [Comment] = [
    new Comment("message1", "timestamp"),
    new Comment("message2", "timestamp"),
    new Comment("message3", "timestamp"),
    new Comment("message4", "timestamp"),
    new Comment("message5", "timestamp")
  ];

  constructor(private http: Http) {}

  public getCommentsForTorrentById(id: number): [Comment] {
    return this.mock;
  }
}
