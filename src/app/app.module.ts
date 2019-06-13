import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserListDetailComponent } from './users/user-list-detail/user-list-detail.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostListDetailComponent } from './posts/post-list-detail/post-list-detail.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { AlbumsCardsComponent } from './albums/albums-cards/albums-cards.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';

import { AgmCoreModule } from '@agm/core';
import {SuiModule} from 'ng2-semantic-ui';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserListDetailComponent,
    PostsListComponent,
    PostListDetailComponent,
    UserCommentsComponent,
    PostDetailComponent,
    UserDetailComponent,
    AlbumsCardsComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SuiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu3OvMtGhkIl6P324NQI-Wut3lLtB6QcE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
