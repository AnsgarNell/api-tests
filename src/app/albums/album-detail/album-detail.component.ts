import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {Album} from '../album-model';
import {Photo} from '../../photos/photo-model';
import {User} from '../../users/user-model';
import {MessageService} from '../../shared/services/message.service';
import {finalize} from 'rxjs/operators';

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
    private apiServicesService: ApiService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.getAlbum();
  }

  getAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiServicesService.getAlbumById(id)
        .subscribe(
          album => {
          this.album = album;
          this.getAuthor();
          this.getPhotos();
        },
        error => {
          this.messageService.add(`${error.name}: "${error.message}"`);
        }
      );
  }

  getAuthor(): void {
    this.apiServicesService.getUserById(this.album.userId)
        .subscribe(
            user => this.author = user,
        error => {
          this.messageService.add(`${error.name}: "${error.message}"`);
        }
      );
  }

  getPhotos(): void {
    this.apiServicesService.getPhotosByAlbumId(this.album.id)
        .pipe(
            finalize(() => this.loading = false),
        ).subscribe(
        photos => this.photos = photos,
        error => {
          this.messageService.add(`${error.name}: "${error.message}"`);
        }
    );
  }
}
