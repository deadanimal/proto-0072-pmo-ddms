import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanFolderComponent } from './pengurusan-folder.component';

describe('PengurusanFolderComponent', () => {
  let component: PengurusanFolderComponent;
  let fixture: ComponentFixture<PengurusanFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
