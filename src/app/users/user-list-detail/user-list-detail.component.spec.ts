import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDetailComponent } from './user-list-detail.component';

describe('UserListDetailComponent', () => {
  let component: UserListDetailComponent;
  let fixture: ComponentFixture<UserListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
