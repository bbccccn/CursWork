import { Component, OnInit } from '@angular/core';
import {TorrentService} from "../entities/torrent/torrent.service";
import {Torrent} from "../entities/torrent/torrent";
import {CategoryService} from "../entities/category/category.service";
import {Category} from "../entities/category/category";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-torrents-list',
  templateUrl: './torrents-list.component.html',
  styleUrls: ['./torrents-list.component.css']
})
export class TorrentsListComponent implements OnInit {
  private category: Category;
  private torrentsList: Torrent[];

  constructor(private torrentService:TorrentService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //when will be ready routing -- make this $hit
    let x;
    this.route.params.subscribe(params => {
      x = +params['id'];
    });
    this.categoryService.getCategoryById(x)
      .subscribe(
        category => {
          let x = JSON.parse(category["_body"]);
          this.category = JSON.parse(category["_body"]);
          this.torrentsList = this.category.torrents;
        }
      );
  }

  public onClick(torrent: Torrent){
    this.router.navigate(['/torrent', torrent.id]);
  }

  public addNew(){
    this.router.navigate(['/torrent/new', this.category.id]);
  }

}
