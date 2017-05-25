import { Injectable } from '@angular/core';
import {Category} from "./category";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CategoryService {
  // private mock:[Category] = [
  //   new Category(0, null, "Movies", [
  //     new Category(1, 0, "Comedy", []),
  //     new Category(2, 0, "Horror", []),
  //     new Category(3, 0, "New CamRip", [
  //       new Category(4, 3, "Comedy", []),
  //       new Category(5, 3, "Horror", []),
  //     ])
  //   ]),
  //   new Category(6, null, "Games", [
  //     new Category(7, 6, "Action", [
  //       new Category(8, 7, "TPS", []),
  //       new Category(9, 7, "FPS", []),
  //       new Category(10, 7, "Sosnooles", []),
  //       new Category(11, 7, "Old Games", [])
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
