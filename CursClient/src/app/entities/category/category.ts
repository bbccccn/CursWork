import {Torrent} from "../torrent/torrent";
export class Category {
  id: number;
  parentCategoryId: number;
  name: string;
  childCategories: [Category];
  torrents: Torrent[];


  constructor(id: number, parentId: number, name: string, childCategories: any, torrents?: Torrent[]) {
    this.id = id;
    this.parentCategoryId = parentId;
    this.name = name;
    this.childCategories = childCategories;
    if (torrents) this.torrents = torrents;
  }
}
