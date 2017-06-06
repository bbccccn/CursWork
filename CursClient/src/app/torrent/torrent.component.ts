import { Component, OnInit } from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CommentService} from "../entities/comment/comment.service";
import {UserService} from "../entities/user/user.service";
import {User} from "../entities/user/user";

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css']
})
export class TorrentComponent implements OnInit {
  private torrent: Torrent;
  private author: User;
  private isDataLoaded: boolean = false;

  constructor(private torrentService: TorrentService,
              private commentService: CommentService,
              private userService: UserService,
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
        // this.userService.getUserById(this.torrent.user.id).subscribe(
        //   user => {
        //     this.author = JSON.parse(user["_body"]);
        //     this.isDataLoaded = true;
        //   }
        // );
        this.isDataLoaded = true;
      }
    );
  }
}
