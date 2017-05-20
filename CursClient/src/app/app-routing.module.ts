import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {TorrentsListComponent} from "./torrents-list/torrents-list.component";
import {TorrentComponent} from "./torrent/torrent.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'category/:id',
    component: TorrentsListComponent
  },
  {
    path: 'torrent/:id',
    component: TorrentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
