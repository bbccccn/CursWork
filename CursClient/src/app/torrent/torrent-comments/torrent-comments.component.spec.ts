import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentCommentsComponent } from './torrent-comments.component';

describe('TorrentCommentsComponent', () => {
  let component: TorrentCommentsComponent;
  let fixture: ComponentFixture<TorrentCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
