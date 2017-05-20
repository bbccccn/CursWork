import { Component, OnInit } from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css']
})
export class TorrentComponent implements OnInit {
  private torrent: Torrent;

  constructor(private torrentService:TorrentService) { }

  ngOnInit() {
    //here -- change value 0 to service route parsed param
    this.torrent = this.torrentService.getTorrentById(0);
  }

}
