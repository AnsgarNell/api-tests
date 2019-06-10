import { Component, OnInit } from '@angular/core';
import {Album} from '../album-model';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-albums-cards',
  templateUrl: './albums-cards.component.html',
  styleUrls: ['./albums-cards.component.css']
})
export class AlbumsCardsComponent implements OnInit {
  albums: Album[];
  loading: boolean;

  constructor(apiServicesService: ApiService) {
    this.loading = true;
    apiServicesService.getAlbums()
      .subscribe(albums => {
          this.albums = albums;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
  }

}
