import { Component, OnInit } from '@angular/core';
import {User} from '../user-model';
import {ApiService} from '../../shared/services/api.service';
import {finalize} from 'rxjs/operators';
import {MessageService} from '../../shared/services/message.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  loading: boolean;

  constructor(apiServicesService: ApiService,
              private messageService: MessageService) {
    this.loading = true;
    apiServicesService.getUsers()
        .pipe(
            finalize(() => this.loading = false),
        ).subscribe(
            users => {
          this.users = users;
        },
        error => {
            this.messageService.add(`${error.name}: "${error.message}"`);
        }
      );
  }

  ngOnInit() {
  }

}
