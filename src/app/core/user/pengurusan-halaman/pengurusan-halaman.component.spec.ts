import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanHalamanComponent } from './pengurusan-halaman.component';

describe('PengurusanHalamanComponent', () => {
  let component: PengurusanHalamanComponent;
  let fixture: ComponentFixture<PengurusanHalamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanHalamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanHalamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
