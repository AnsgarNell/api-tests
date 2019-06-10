import { Component, OnInit } from '@angular/core';
import {User} from '../user-model';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  loading: boolean;

  constructor(apiServicesService: ApiService) {
    this.loading = true;
    apiServicesService.getUsers()
      .subscribe(users => {
          this.users = users;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
  }

}
