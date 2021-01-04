import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanLaporanStatikComponent } from './pengurusan-laporan-statik.component';

describe('PengurusanLaporanStatikComponent', () => {
  let component: PengurusanLaporanStatikComponent;
  let fixture: ComponentFixture<PengurusanLaporanStatikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanLaporanStatikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanLaporanStatikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
