import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanTemplatComponent } from './pengurusan-templat.component';

describe('PengurusanTemplatComponent', () => {
  let component: PengurusanTemplatComponent;
  let fixture: ComponentFixture<PengurusanTemplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanTemplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
