export class Torrent {
  private _id: number;
  private _name: string;
  private _description: string;
  private _authorId: number;
  private _createDate: string;
  private _latestModificationDate: string;
  //rework to enum?
  private _status: string;
  //


  constructor(id: number,
              name: string,
              description?: string,
              latestModificationDate?: string,
              createDate?: string,
              authorId?: number,
              status?: string) {
    this._id = id;
    this._name = name;
    if (description)
      this._description = description;
    if (authorId)
      this._authorId = authorId;
    if (createDate)
      this._createDate = createDate;
    if (latestModificationDate)
      this._latestModificationDate = latestModificationDate;
    if (status)
      this._status = status;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get authorId(): number {
    return this._authorId;
  }

  set authorId(value: number) {
    this._authorId = value;
  }

  get createDate(): string {
    return this._createDate;
  }

  set createDate(value: string) {
    this._createDate = value;
  }

  get latestModificationDate(): string {
    return this._latestModificationDate;
  }

  set latestModificationDate(value: string) {
    this._latestModificationDate = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
