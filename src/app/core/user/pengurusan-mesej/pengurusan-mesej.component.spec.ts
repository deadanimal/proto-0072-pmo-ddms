import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanMesejComponent } from './pengurusan-mesej.component';

describe('PengurusanMesejComponent', () => {
  let component: PengurusanMesejComponent;
  let fixture: ComponentFixture<PengurusanMesejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanMesejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanMesejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
