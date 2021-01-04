import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanPendaftaranAduanComponent } from './pengurusan-pendaftaran-aduan.component';

describe('PengurusanPendaftaranAduanComponent', () => {
  let component: PengurusanPendaftaranAduanComponent;
  let fixture: ComponentFixture<PengurusanPendaftaranAduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanPendaftaranAduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanPendaftaranAduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
