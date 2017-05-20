export class Comment{
  public message: string;
  public timestamp: string;


  constructor(message: string, timestamp: string) {
    this.message = message;
    this.timestamp = timestamp;
  }
}
