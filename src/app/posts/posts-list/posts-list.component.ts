import { Component, OnInit } from '@angular/core';
import {Post} from '../posts-model';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  loading: boolean;

  constructor(apiServicesService: ApiService) {
    this.loading = true;
    apiServicesService.getPosts()
      .subscribe(posts => {
          this.posts = posts;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
  }
}
