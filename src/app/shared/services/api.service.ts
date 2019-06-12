import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../users/user-model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Post} from '../../posts/post-model';
import {UserComment} from '../../user-comments/user-comments-model';
import {Album} from '../../albums/album-model';
import {Photo} from '../../photos/photo-model';

const baseUrl = `https://jsonplaceholder.typicode.com/`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
   return this.http.get<User[]>(baseUrl + 'users');
  }

  getPostsByStartAndLimit(start: number, limit: number): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(baseUrl + `posts?_start=${start}&_limit=${limit}`, { observe: 'response'});
  }

  getAlbumsByStartAndLimit(start: number, limit: number): Observable<HttpResponse<Album[]>> {
    return this.http.get<Album[]>(baseUrl + `albums?_start=${start}&_limit=${limit}`, { observe: 'response'});
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(baseUrl + 'users/' + id);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(baseUrl + 'posts/' + id);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Post>(baseUrl + 'albums/' + id);
  }

  getCommentsByPostId(id: number): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(baseUrl + 'comments?postId=' + id);
  }

  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(baseUrl + 'photos?albumId=' + id);
  }
}
