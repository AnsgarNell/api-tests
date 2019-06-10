import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {Post} from '../post-model';
import {User} from '../../users/user-model';
import {UserComment} from '../../user-comments/user-comments-model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  author: User;
  comments: UserComment[];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiServicesService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiServicesService.getPostById(id)
      .subscribe(post => {
        this.post = post;
        this.getAuthor();
        this.getComments();
      });
  }

  getAuthor(): void {
    this.apiServicesService.getUserById(this.post.userId)
      .subscribe(user => this.author = user);
  }

  getComments(): void {
    this.apiServicesService.getCommentsByPostId(this.post.id)
      .subscribe(comments => {
        this.comments = comments;
        this.loading = false;
      });
  }
}
