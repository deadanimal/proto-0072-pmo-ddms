import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanPengunaComponent } from './pengurusan-penguna.component';

describe('PengurusanPengunaComponent', () => {
  let component: PengurusanPengunaComponent;
  let fixture: ComponentFixture<PengurusanPengunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanPengunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanPengunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
