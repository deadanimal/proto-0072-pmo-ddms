import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanFolderDetailsComponent } from './pengurusan-folder-details.component';

describe('PengurusanFolderDetailsComponent', () => {
  let component: PengurusanFolderDetailsComponent;
  let fixture: ComponentFixture<PengurusanFolderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanFolderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanFolderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
