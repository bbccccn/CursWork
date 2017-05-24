export class Torrent {
  public id: number;
  public name: string;
  public description: string;
  public authorId: number;
  public createDate: string;
  public latestModificationDate: string;
  //rework to enum?
  public status: string;
  public files: File[];
  public comments: Comment[];
  //


  constructor(id: number,
              name: string,
              description?: string,
              latestModificationDate?: string,
              createDate?: string,
              authorId?: number,
              status?: string) {
    this.id = id;
    this.name = name;
    if (description)
      this.description = description;
    if (authorId)
      this.authorId = authorId;
    if (createDate)
      this.createDate = createDate;
    if (latestModificationDate)
      this.latestModificationDate = latestModificationDate;
    if (status)
      this.status = status;
  }
}
