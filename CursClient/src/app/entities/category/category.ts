export class Category {
  id: number;
  parentCategoryId: number;
  name: string;
  childCategories: [Category];


  constructor(id: number, parentId: number, name: string, childCategories: any) {
    this.id = id;
    this.parentCategoryId = parentId;
    this.name = name;
    this.childCategories = childCategories;
  }
}
