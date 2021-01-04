import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPengurusanLaporanDinamikComponent } from './my-pengurusan-laporan-dinamik.component';

describe('MyPengurusanLaporanDinamikComponent', () => {
  let component: MyPengurusanLaporanDinamikComponent;
  let fixture: ComponentFixture<MyPengurusanLaporanDinamikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPengurusanLaporanDinamikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPengurusanLaporanDinamikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
