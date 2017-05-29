import { Component, OnInit } from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CommentService} from "../entities/comment/comment.service";

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css']
})
export class TorrentComponent implements OnInit {
  private torrent: Torrent;

  constructor(private torrentService: TorrentService,
              private commentService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let x;
    //here -- change value 0 to service route parsed param
    this.route.params.subscribe(params => {
      x = +params['id'];
    });

    this.torrentService.getTorrentById(x).subscribe(
      torrent => {
        this.torrent = JSON.parse(torrent["_body"]);
      }
    );

  }
}
