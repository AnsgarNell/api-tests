import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user-model';

@Component({
  selector: 'app-user-list-detail',
  templateUrl: './user-list-detail.component.html',
  styleUrls: ['./user-list-detail.component.css']
})
export class UserListDetailComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
