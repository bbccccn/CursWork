import {Component, OnInit} from '@angular/core';
import {Torrent} from "../entities/torrent/torrent";
import {TorrentService} from "../entities/torrent/torrent.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../entities/category/category";
import {CategoryService} from "../entities/category/category.service";
import {PermissionService} from "../entities/permission/permission.service";
import {Permission} from "../entities/permission/permission";
import {UserService} from "../entities/user/user.service";
import {User} from "../entities/user/user";
import {isNull} from "util";
import {MyFileService} from "../entities/file/my-file.service";
import {MyFile} from "../entities/file/my-file";

@Component({
  selector: 'app-add-torrent',
  templateUrl: './add-torrent.component.html',
  styleUrls: ['./add-torrent.component.css']
})
export class AddTorrentComponent implements OnInit {
  private user: User;
  private torrent: Torrent;
  private blob: Blob;
  private permissions: Permission[];
  private files: MyFile[];

  constructor(private torrentService: TorrentService,
              private categoryService: CategoryService,
              private permissionService: PermissionService,
              private userService: UserService,
              private fileService: MyFileService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(JSON.stringify(this.user));
    if (this.user !== null) {
      this.torrent = new Torrent(null, "");

      //TODO handle this
      this.torrent.status = "published";
      this.torrent.user = this.user;
      this.files = [];

      this.route.params.subscribe(params => {
        this.categoryService.getCategoryById(+params['categoryId']).subscribe(v => {
          this.torrent.category = JSON.parse(v["_body"]);
        })
      });
      this.permissionService.getAllPermissions().subscribe(permissions => {
          this.permissions = JSON.parse(permissions["_body"]);
        }
      );
    }
  }

  public isUserAuth(): boolean{
    return this.user == null;
  }

  public onClick(){
    this.blob = new Blob();
    console.log("Before the fall");
    let torrent;
    this.torrentService.saveTorrent(this.torrent).subscribe(v => {
      torrent = JSON.parse(v["_body"]);
      console.log(JSON.stringify(torrent));
      this.files.forEach(v => {
        v.torrent = torrent;
        this.fileService.sendFile(v);
      });

      this.router.navigate(['/category/', this.torrent.category.id]);
    });
  }

  public onFileUpload(event){
    let file = event.target.files.item(0);
    let fr:FileReader = new FileReader();
    console.log(file.name);
    console.log(file.size);
    console.log(file.type);
    let myFile: MyFile  = new MyFile();
    fr.onload = function (e) {
      myFile.file = btoa(fr.result);
      console.log(myFile.file);
    };
    myFile.name = file.name;
    myFile.type = file.type;
    fr.readAsBinaryString(file);
    this.files.push(myFile);
  }

  private sendFile(file: File){

  }

}
