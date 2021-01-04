import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanSoalSelidikComponent } from './pengurusan-soal-selidik.component';

describe('PengurusanSoalSelidikComponent', () => {
  let component: PengurusanSoalSelidikComponent;
  let fixture: ComponentFixture<PengurusanSoalSelidikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanSoalSelidikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanSoalSelidikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
