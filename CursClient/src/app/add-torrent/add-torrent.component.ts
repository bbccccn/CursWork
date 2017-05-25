import {Component, OnInit} from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-torrent',
  templateUrl: './add-torrent.component.html',
  styleUrls: ['./add-torrent.component.css']
})
export class AddTorrentComponent implements OnInit {
  private torrent: Torrent;
  private blob: Blob;
  private fileList: File[];


  constructor(private torrentService:TorrentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.torrent = new Torrent(null, "");
    this.fileList = [];
    this.route.params.subscribe(params => {
      this.torrent.id = +params['categoryId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  public onClick(){
    console.log("test...");
    console.log(this.torrent.files[1].name);

    this.blob = new Blob();
  }

  public onFileUpload(event){
    let x = [];
    console.log(event.target.files.item(0));
    this.fileList.push(event.target.files.item(0));
  }

  private sendFile(file: File){

  }

}
