import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TorrentsListComponent} from "./torrents-list/torrents-list.component";
import {TorrentComponent} from "./torrent/torrent.component";
import {AddTorrentComponent} from "./add-torrent/add-torrent.component";
import {MainCategoriesComponent} from "./main-categories/main-categories.component";
import {ProfileWidgetComponent} from "./profile-widget/profile-widget.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainCategoriesComponent
  },
  {
    path: 'category/:id',
    component: TorrentsListComponent
  },
  {
    path: 'torrent/new/:categoryId',
    component: AddTorrentComponent
  },
  {
    path: 'torrent/:id',
    component: TorrentComponent
  },
  {
    path: 'login',
    component: ProfileWidgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
