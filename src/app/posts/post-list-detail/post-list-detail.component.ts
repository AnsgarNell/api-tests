import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../post-model';
import {User} from '../../users/user-model';
import {ApiService} from '../../shared/services/api.service';
import {UserComment} from '../../user-comments/user-comments-model';
import {forkJoin} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: '[app-post-list-detail]',
  templateUrl: './post-list-detail.component.html',
  styleUrls: ['./post-list-detail.component.css']
})
export class PostListDetailComponent implements OnInit {
  @Input() post: Post;
  @Input() isLast: boolean;
  @Output() finishedLoadingEmitter = new EventEmitter();
  author: User;
  comments: UserComment[];

  constructor(private apiServicesService: ApiService) {
  }

  ngOnInit() {
    forkJoin(
        this.apiServicesService.getUserById(this.post.userId),
        this.apiServicesService.getCommentsByPostId(this.post.id)
    )
        .pipe(
            finalize(() => {
              if (this.isLast) {
                this.finishedLoadingEmitter.emit();
              }
            }),
        ).subscribe(([author, comments]) => {
        this.author = author;
        this.comments = comments;
      });
  }

  formatBody(): string {
    return  this.post.body.slice(0, 49) + '...';
  }
}
