import {User} from "../user/user";
export class Comment{
  public comment: string;
  public timestamp: string;
  public author: User;


  constructor(comment: string, timestamp: string, author: User) {
    this.author = author;
    this.comment = comment;
    this.timestamp = timestamp;
  }
}
