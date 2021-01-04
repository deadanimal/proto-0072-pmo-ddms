import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanKalendarComponent } from './pengurusan-kalendar.component';

describe('PengurusanKalendarComponent', () => {
  let component: PengurusanKalendarComponent;
  let fixture: ComponentFixture<PengurusanKalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanKalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanKalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
