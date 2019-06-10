import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
