import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import {CategoryService} from "./entities/category/category.service";
import { TorrentComponent } from './torrent/torrent.component';
import { TorrentsListComponent } from './torrents-list/torrents-list.component';
import {TorrentService} from "./entities/torrent/torrent.service";
import { TorrentCommentsComponent } from './torrent/torrent-comments/torrent-comments.component';
import {CommentService} from "./entities/comment/comment.service";
import {MdButtonModule, MdInputModule, MdSelect, MdSelectModule} from "@angular/material";
import { AddTorrentComponent } from './add-torrent/add-torrent.component';
import {PermissionService} from "./entities/permission/permission.service";
import {UserService} from "./entities/user/user.service";
import {StorageService} from "./entities/session/storage.service";
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import {MyFileService} from "./entities/file/my-file.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileWidgetComponent,
    MainCategoriesComponent,
    TorrentComponent,
    TorrentsListComponent,
    TorrentCommentsComponent,
    AddTorrentComponent,
    ProfileBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [
    CategoryService,
    TorrentService,
    CommentService,
    UserService,
    PermissionService,
    StorageService,
    MyFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
