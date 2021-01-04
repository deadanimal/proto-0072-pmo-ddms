import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanPromosiComponent } from './pengurusan-promosi.component';

describe('PengurusanPromosiComponent', () => {
  let component: PengurusanPromosiComponent;
  let fixture: ComponentFixture<PengurusanPromosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanPromosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanPromosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
