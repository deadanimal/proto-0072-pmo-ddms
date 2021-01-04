import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanAplikasiComponent } from './pengurusan-aplikasi.component';

describe('PengurusanAplikasiComponent', () => {
  let component: PengurusanAplikasiComponent;
  let fixture: ComponentFixture<PengurusanAplikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanAplikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
