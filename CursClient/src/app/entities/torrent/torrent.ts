export class Torrent {
  public id: number;
  public name: string;
  public description: string;
  public authorId?: number;
  public creationDate: string;
  public editDate: string;
  public status: string;
  public files?: File[];
  public comments?: Comment[];
  //


  constructor(id: number,
              name: string,
              description?: string,
              latestModificationDate?: string,
              createDate?: string,
              authorId?: number,
              status?: string,
              files?: File[],
              comments?: Comment[]) {
    this.id = id;
    this.name = name;
    if (description)
      this.description = description;
    if (authorId)
      this.authorId = authorId;
    if (createDate)
      this.creationDate = createDate;
    if (latestModificationDate)
      this.editDate = latestModificationDate;
    if (status)
      this.status = status;
    if(files)
      this.files = files;
    if (comments)
      this.comments = comments;
  }
}
