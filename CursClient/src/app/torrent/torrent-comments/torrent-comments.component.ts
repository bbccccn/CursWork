import { Component, OnInit } from '@angular/core';
import {Comment} from "../../entities/comment/comment";
import {CommentService} from "../../entities/comment/comment.service";
import {ActivatedRoute, UrlHandlingStrategy} from "@angular/router";
import {UserService} from "../../entities/user/user.service";

@Component({
  selector: 'app-torrent-comments',
  templateUrl: './torrent-comments.component.html',
  styleUrls: ['./torrent-comments.component.css']
})
export class TorrentCommentsComponent implements OnInit {
  private comments: Comment[];

  constructor(private commentService:CommentService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let x;
    this.route.params.subscribe(params => {
      x = +params['id'];
    });
    //TODO -- parse id from route
    this.commentService.getCommentsForTorrentById(x).subscribe(
      v =>
      {
        this.comments = JSON.parse(v["_body"]);
      }
    );
  }


}
