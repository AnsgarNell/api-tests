import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsCardsComponent } from './albums-cards.component';

describe('AlbumsCardsComponent', () => {
  let component: AlbumsCardsComponent;
  let fixture: ComponentFixture<AlbumsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
