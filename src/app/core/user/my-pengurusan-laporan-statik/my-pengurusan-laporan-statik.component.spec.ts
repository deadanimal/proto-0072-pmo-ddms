import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPengurusanLaporanStatikComponent } from './my-pengurusan-laporan-statik.component';

describe('MyPengurusanLaporanStatikComponent', () => {
  let component: MyPengurusanLaporanStatikComponent;
  let fixture: ComponentFixture<MyPengurusanLaporanStatikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPengurusanLaporanStatikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPengurusanLaporanStatikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
