import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanEmailComponent } from './pengurusan-email.component';

describe('PengurusanEmailComponent', () => {
  let component: PengurusanEmailComponent;
  let fixture: ComponentFixture<PengurusanEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
