import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPengurusanPengunaComponent } from './my-pengurusan-penguna.component';

describe('MyPengurusanPengunaComponent', () => {
  let component: MyPengurusanPengunaComponent;
  let fixture: ComponentFixture<MyPengurusanPengunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPengurusanPengunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPengurusanPengunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
