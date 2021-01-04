import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanLaporanDinamikComponent } from './pengurusan-laporan-dinamik.component';

describe('PengurusanLaporanDinamikComponent', () => {
  let component: PengurusanLaporanDinamikComponent;
  let fixture: ComponentFixture<PengurusanLaporanDinamikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanLaporanDinamikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanLaporanDinamikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
