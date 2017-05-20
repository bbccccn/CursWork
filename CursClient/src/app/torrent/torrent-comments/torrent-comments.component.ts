import { Component, OnInit } from '@angular/core';
import {Comment} from "../../entities/comment/comment";
import {CommentService} from "../../entities/comment/comment.service";

@Component({
  selector: 'app-torrent-comments',
  templateUrl: './torrent-comments.component.html',
  styleUrls: ['./torrent-comments.component.css']
})
export class TorrentCommentsComponent implements OnInit {
  private comments: [Comment];

  constructor(private commentService:CommentService) { }

  ngOnInit() {
    //TODO -- parse id from route
    this.comments = this.commentService.getCommentsForTorrentById(0);
  }

}
