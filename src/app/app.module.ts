import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserListDetailComponent } from './users/user-list-detail/user-list-detail.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostListDetailComponent } from './posts/post-list-detail/post-list-detail.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListDetailComponent,
    PostsListComponent,
    PostListDetailComponent,
    UserCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
