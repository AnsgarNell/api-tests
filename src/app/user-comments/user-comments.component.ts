import {Component, Input, OnInit} from '@angular/core';
import {UserComment} from './user-comments-model';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {
  @Input() comment: UserComment;

  constructor() { }

  ngOnInit() {
  }

}
