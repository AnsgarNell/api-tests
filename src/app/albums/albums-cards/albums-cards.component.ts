import { Component, OnInit } from '@angular/core';
import {Album} from '../album-model';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-albums-cards',
  templateUrl: './albums-cards.component.html',
  styleUrls: ['./albums-cards.component.css']
})
export class AlbumsCardsComponent implements OnInit {
  albums: Album[];
  loading: boolean;
  currentPage: number;
  limit: number;
  totalAlbums: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiServicesService: ApiService) {
        this.currentPage = 1;
        this.limit = 9;
        this.totalAlbums = 100;
        route.params.subscribe(val => {
            this.getAlbums();
        });
    }

  ngOnInit() {
      this.getAlbums();
  }

    getAlbums(): void {
        this.loading = true;
        this.currentPage = +this.route.snapshot.paramMap.get('start');
        this.limit = +this.route.snapshot.paramMap.get('limit');
        this.apiServicesService.getAlbumsByStartAndLimit((this.currentPage - 1) * this.limit, this.limit)
            .subscribe(response => {
                this.totalAlbums = +response.headers.get('X-Total-Count');
                this.albums = response.body;
                this.loading = false;
            });
    }

    onPaginationClick(): void {
        this.router.navigateByUrl(`/albums/start/${this.currentPage}/limit/${this.limit}`);
    }

}
