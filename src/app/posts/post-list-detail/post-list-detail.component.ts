import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from '../post-model';
import {User} from '../../users/user-model';
import {ApiService} from '../../shared/services/api.service';
import {UserComment} from '../../user-comments/user-comments-model';

@Component({
  selector: 'app-post-list-detail',
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
    this.apiServicesService.getUserById(this.post.userId)
      .subscribe(user => {
          this.author = user;
        }
      );
    this.apiServicesService.getCommentsByPostId(this.post.id)
      .subscribe(comments => {
        this.comments = comments;
        }
      );
  }

  formatBody(): string {
    return  this.post.body.slice(0, 49) + '...';
  }
}
