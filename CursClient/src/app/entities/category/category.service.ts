import { Injectable } from '@angular/core';
import {Category} from "./category";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CategoryService {
  // private mock:[category] = [
  //   new category(0, null, "Movies", [
  //     new category(1, 0, "Comedy", []),
  //     new category(2, 0, "Horror", []),
  //     new category(3, 0, "New CamRip", [
  //       new category(4, 3, "Comedy", []),
  //       new category(5, 3, "Horror", []),
  //     ])
  //   ]),
  //   new category(6, null, "Games", [
  //     new category(7, 6, "Action", [
  //       new category(8, 7, "TPS", []),
  //       new category(9, 7, "FPS", []),
  //       new category(10, 7, "Sosnooles", []),
  //       new category(11, 7, "Old Games", [])
  //     ])
  //   ])
  // ];

  constructor(private http: Http) { }

  public getAllCategories(): Observable<any>
  {
    // return this.mock;
    return this.http.get('http://localhost:8080/api/categories');
  }

  public getCategoryById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/categories/' + id);
  }

}
  // {
  //   id: 0,
  //   parentCategoryId: null,
  //   name: "General category 1 lvl",
  //   childCategories: [
  //     {
  //       id: 1,
  //       parentCategoryId: 0,
  //       name: "Subcategory 2 lvl",
  //       childCategories: []
  //     }
  //   ]
  // }
