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
  private torrentsList: [Torrent];

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
          console.log(JSON.stringify(category));
          this.category = JSON.parse(category["_body"]);
          console.log("------");
          this.torrentsList = JSON.parse(category["_body.torrents"]);
        }
      );
  }

  public onClick(torrent: Torrent){
    this.router.navigate(['/torrent', torrent.id]);
  }

}
