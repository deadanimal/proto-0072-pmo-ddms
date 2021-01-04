import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanRepositoriComponent } from './pengurusan-repositori.component';

describe('PengurusanRepositoriComponent', () => {
  let component: PengurusanRepositoriComponent;
  let fixture: ComponentFixture<PengurusanRepositoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanRepositoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanRepositoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
