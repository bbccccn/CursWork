import { Component, OnInit } from '@angular/core';
import {TorrentService} from "../entities/torrent/torrent.service";
import {Torrent} from "../entities/torrent/torrent";
import {CategoryService} from "../entities/category/category.service";
import {Category} from "../entities/category/category";
import {ActivatedRoute, Params} from "@angular/router";

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    //when will be ready routing -- make this $hit
    this.torrentsList = this.torrentService.getAllTorrentsByCategory(
      0
      //TODO make service give back category by id
    //   this.route.params
    //     .switchMap((params: Params) => this.torrentService.getAllTorrentsByCategory(+params['id']))
    //     .subscribe(
    //       (torrents: [Torrent]) => this.torrentsList = torrents)
    );
  }

}
