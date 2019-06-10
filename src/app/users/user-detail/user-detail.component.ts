import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user-model';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private apiServicesService: ApiService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiServicesService.getUserById(id)
      .subscribe(user => this.user = user);
  }
}
