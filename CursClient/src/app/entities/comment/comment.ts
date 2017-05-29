export class Comment{
  public authorId: number;
  public comment: string;
  public timestamp: string;


  constructor(authorId: number, comment: string, timestamp: string) {
    this.authorId = authorId;
    this.comment = comment;
    this.timestamp = timestamp;
  }
}
