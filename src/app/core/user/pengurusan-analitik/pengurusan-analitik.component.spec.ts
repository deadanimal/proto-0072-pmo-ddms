import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanAnalitikComponent } from './pengurusan-analitik.component';

describe('PengurusanAnalitikComponent', () => {
  let component: PengurusanAnalitikComponent;
  let fixture: ComponentFixture<PengurusanAnalitikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanAnalitikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanAnalitikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
