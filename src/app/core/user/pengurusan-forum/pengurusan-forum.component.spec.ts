import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanForumComponent } from './pengurusan-forum.component';

describe('PengurusanForumComponent', () => {
  let component: PengurusanForumComponent;
  let fixture: ComponentFixture<PengurusanForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
