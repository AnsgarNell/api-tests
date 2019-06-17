import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from '../post-model';
import {User} from '../../users/user-model';
import {ApiService} from '../../shared/services/api.service';
import {UserComment} from '../../user-comments/user-comments-model';
import {forkJoin} from 'rxjs';

@Component({
  selector: '[app-post-list-detail]',
  templateUrl: './post-list-detail.component.html',
  styleUrls: ['./post-list-detail.component.css']
})
export class PostListDetailComponent implements OnInit {
  @Input() post: Post;
  author: User;
  comments: UserComment[];

  constructor(private apiServicesService: ApiService) {
  }

  ngOnInit() {
    forkJoin(
        this.apiServicesService.getUserById(this.post.userId),
        this.apiServicesService.getCommentsByPostId(this.post.id)
    )
        .subscribe(([author, comments]) => {
          this.author = author;
          this.comments = comments;
        });
  }

  formatBody(): string {
    return  this.post.body.slice(0, 49) + '...';
  }
}
