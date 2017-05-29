import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileWidgetComponent } from './main-page/profile-widget/profile-widget.component';
import { MainCategoriesComponent } from './main-page/main-categories/main-categories.component';
import {CategoryService} from "./entities/category/category.service";
import { TorrentComponent } from './torrent/torrent.component';
import { TorrentsListComponent } from './torrents-list/torrents-list.component';
import {TorrentService} from "./entities/torrent/torrent.service";
import { TorrentCommentsComponent } from './torrent/torrent-comments/torrent-comments.component';
import {CommentService} from "./entities/comment/comment.service";
import {MdButtonModule, MdInputModule} from "@angular/material";
import { AddTorrentComponent } from './add-torrent/add-torrent.component';
import {PermissionService} from "./entities/permission/permission.service";
import {UserService} from "./entities/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ProfileWidgetComponent,
    MainCategoriesComponent,
    TorrentComponent,
    TorrentsListComponent,
    TorrentCommentsComponent,
    AddTorrentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [
    CategoryService,
    TorrentService,
    CommentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
