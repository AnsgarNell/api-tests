import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user-model';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {MessageService} from '../../shared/services/message.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiServicesService: ApiService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiServicesService.getUserById(id)
        .pipe(
            finalize(() => this.loading = false),
        ).subscribe(
            user => {
          this.user = user;
        },
        error => {
          this.messageService.add(`${error.name}: "${error.message}"`);
        }
      );
  }
}
