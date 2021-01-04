import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanCarianComponent } from './pengurusan-carian.component';

describe('PengurusanCarianComponent', () => {
  let component: PengurusanCarianComponent;
  let fixture: ComponentFixture<PengurusanCarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanCarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanCarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
