import {Component, OnInit} from '@angular/core';
import {Category} from "../entities/category/category";
import {Router} from "@angular/router";
import {CategoryService} from "../entities/category/category.service";

@Component({
  selector: 'app-main-torrents',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {
  private categories: Category[];
  private route: string;

  constructor(private categoryService: CategoryService,
              private router: Router) {}

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(
      categories => {
        this.categories = JSON.parse(categories["_body"]);
      }
    );
  }

  onSelect(category: Category) {
      this.router.navigate(['/category', category.id])
  }

}
