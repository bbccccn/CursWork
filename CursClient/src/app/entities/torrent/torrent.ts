import {Category} from "../category/category";
import {Permission} from "../permission/permission";
import {User} from "../user/user";
export class Torrent {
  public id: number;
  public name: string;
  public description: string;
  public user: User;
  public creationDate: string;
  public editDate: string;
  public status: string;
  public files?: File[];
  public comments?: Comment[];
  public category: Category;
  public permission: Permission;
  //


  constructor(id: number,
              name: string,
              description?: string,
              latestModificationDate?: string,
              createDate?: string,
              status?: string,
              files?: File[],
              comments?: Comment[]) {
    this.id = id;
    this.name = name;
    if (description)
      this.description = description;
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
