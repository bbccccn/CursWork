import {Permission} from "../permission/permission";
export class User{
  id: number;
  name: string;
  email: string;
  regDate: string;
  moreInformation: string;
  sex: string;
  birthday: string;
  permission: Permission;

  constructor() {}
}
