import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanRekodComponent } from './pengurusan-rekod.component';

describe('PengurusanRekodComponent', () => {
  let component: PengurusanRekodComponent;
  let fixture: ComponentFixture<PengurusanRekodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanRekodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanRekodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
