import {Component, OnInit} from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../entities/category/category";
import {CategoryService} from "../entities/category/category.service";
import {PermissionService} from "../entities/permission/permission.service";
import {Permission} from "../entities/permission/permission";
import {UserService} from "../entities/user/user.service";

@Component({
  selector: 'app-add-torrent',
  templateUrl: './add-torrent.component.html',
  styleUrls: ['./add-torrent.component.css']
})
export class AddTorrentComponent implements OnInit {
  private torrent: Torrent;
  private blob: Blob;
  private fileList: File[];
  private permissions: Permission[];

  constructor(private torrentService: TorrentService,
              private categoryService: CategoryService,
              private permissionService: PermissionService,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.torrent = new Torrent(null, "");

    //TODO handle this
    this.torrent.status = "published";
    this.userService.getUserById(1).subscribe(v => this.torrent.user = JSON.parse(v["_body"]));

    this.route.params.subscribe(params => {
      this.categoryService.getCategoryById(+params['categoryId']).subscribe(v => {
        this.torrent.category = JSON.parse(v["_body"]);
        console.log(JSON.stringify(this.torrent.category));
      })
    });
    this.fileList = [];
    this.permissionService.getAllPermissions().subscribe(permissions =>
    {
      this.permissions = JSON.parse(permissions["_body"]);
    }
    );
  }

  public onClick(){
    console.log("test...");
    // console.log(JSON.stringify(this.selectedPermission));
    // console.log("2...");
    // console.log("second test...");

    this.blob = new Blob();
    this.torrentService.saveTorrent(this.torrent);
  }

  public onFileUpload(event){
    this.fileList.push(event.target.files.item(0));
  }

  private sendFile(file: File){

  }

}
