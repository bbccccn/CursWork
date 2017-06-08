import { Component, OnInit } from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../entities/user/user";
import {MyFileService} from "../entities/file/my-file.service";
import {MyFile} from "../entities/file/my-file";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css']
})
export class TorrentComponent implements OnInit {
  private torrent: Torrent;
  private author: User;
  private isDataLoaded: boolean = false;
  private files: MyFile[] = [];
  private image: string = "";
  private torrent_file: string = "";

  constructor(private torrentService: TorrentService,
              private fileService: MyFileService,
              private sanitizer: DomSanitizer,
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
        this.fileService.getTorrentFiles(this.torrent.id).subscribe( v => {
            this.files = JSON.parse(v["_body"]);
            this.isDataLoaded = true;
            this.setupImg();
          }
        )
      }
    );
  }

  getImg(): MyFile{
    if (this.files[0].type === 'image/jpeg') return this.files[0];
    if (this.files[1].type === 'image/jpeg') return this.files[1];
    return null;
  }

  getTorrent(): MyFile{
    if (this.files[0].type === 'application/x-bittorrent') return this.files[0];
    if (this.files[1].type === 'application/x-bittorrent') return this.files[1];
    return null;
  }

  setupImg(){
    this.image = "data:image/png;base64," + this.getImg().file;
    console.log( this.getTorrent().file);
    this.torrent_file = "data:application/x-bittorrent;charset=utf-8;base64," + this.getTorrent().file;
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
