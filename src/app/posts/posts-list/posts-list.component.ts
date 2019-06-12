import { Component, OnInit } from '@angular/core';
import {Post} from '../post-model';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  loading: boolean;
  start: number;
  limit: number;
  totalPosts: number;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private apiServicesService: ApiService) {
      this.start = 1;
      this.limit = 10;
      this.totalPosts = 100;
      route.params.subscribe(val => {
          this.getPosts();
      });
  }

  ngOnInit() {
      this.loading = true;
      this.getPosts();
  }

    getPosts(): void {
        this.start = +this.route.snapshot.paramMap.get('start');
        this.limit = +this.route.snapshot.paramMap.get('limit');
        this.apiServicesService.getPostsByStartAndLimit(this.start, this.limit)
            .subscribe(response => {
                this.totalPosts = +response.headers.get('X-Total-Count');
                this.posts = response.body;
                this.loading = false;
            });
    }

    testClick(): void {
      this.router.navigateByUrl(`/posts/start/${this.start}/limit/${this.limit}`);
    }
}
