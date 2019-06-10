import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../users/user-model';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../posts/posts-model';
import {UserComment} from '../../user-comments/user-comments-model';

const baseUrl = `https://jsonplaceholder.typicode.com/`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
   return this.http.get<User[]>(baseUrl + 'users');
 }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl + 'posts');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(baseUrl + 'users/' + id);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(baseUrl + 'posts/' + id);
  }

  getCommentsByPostId(id: number): Observable<UserComment[]>  {
    return this.http.get<UserComment[]>(baseUrl + 'comments?postId=' + id);
  }
}
