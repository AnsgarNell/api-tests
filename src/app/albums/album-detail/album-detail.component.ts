import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {Album} from '../album-model';
import {Photo} from '../../photos/photo-model';
import {User} from '../../users/user-model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  author: User;
  photos: Photo[];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiServicesService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.getAlbum();
  }

  getAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiServicesService.getAlbumById(id)
      .subscribe(album => {
        this.album = album;
        this.getAuthor();
        this.getPhotos();
      });
  }

  getAuthor(): void {
    this.apiServicesService.getUserById(this.album.userId)
      .subscribe(user => this.author = user);
  }

  getPhotos(): void {
    this.apiServicesService.getPhotosByAlbumId(this.album.id)
      .subscribe(photos => {
        this.photos = photos;
        this.loading = false;
      });
  }
}
