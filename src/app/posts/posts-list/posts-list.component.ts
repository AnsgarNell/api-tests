import { Component, OnInit } from '@angular/core';
import {Post} from '../post-model';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../shared/services/message.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  loading: boolean;
  currentPage: number;
  limit: number;
  totalPosts: number;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private apiServicesService: ApiService,
      private messageService: MessageService) {
      this.currentPage = 1;
      this.limit = 10;
      this.totalPosts = 100;
      route.params.subscribe(val => {
          this.getPosts();
      });
  }

  ngOnInit() {
      this.getPosts();
  }

    getPosts(): void {
        this.loading = true;
        this.currentPage = +this.route.snapshot.paramMap.get('start');
        this.limit = +this.route.snapshot.paramMap.get('limit');
        this.apiServicesService.getPostsByStartAndLimit((this.currentPage - 1) * this.limit, this.limit)
            .pipe(
                finalize(() => this.loading = false),
            ).subscribe(
                response => {
                    this.totalPosts = +response.headers.get('X-Total-Count');
                    this.posts = response.body;
                },
                error => {
                    this.messageService.add(`${error.name}: "${error.message}"`);
                }
            );
    }

    onPaginationClick(): void {
      this.router.navigateByUrl(`/posts/start/${this.currentPage}/limit/${this.limit}`);
    }
}
