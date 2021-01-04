import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPengurusanHalamanComponent } from './my-pengurusan-halaman.component';

describe('MyPengurusanHalamanComponent', () => {
  let component: MyPengurusanHalamanComponent;
  let fixture: ComponentFixture<MyPengurusanHalamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPengurusanHalamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPengurusanHalamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
