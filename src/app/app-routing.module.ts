import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {AlbumsCardsComponent} from './albums/albums-cards/albums-cards.component';
import {AlbumDetailComponent} from './albums/album-detail/album-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts/start/1/limit/1', pathMatch: 'full' },
  { path: 'posts/start/:start/limit/:limit', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'albums', component: AlbumsCardsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
