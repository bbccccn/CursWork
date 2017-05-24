export class Comment{
  public authorId: number;
  public message: string;
  public timestamp: string;


  constructor(authorId: number, message: string, timestamp: string) {
    this.authorId = authorId;
    this.message = message;
    this.timestamp = timestamp;
  }
}
