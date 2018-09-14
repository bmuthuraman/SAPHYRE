import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclanchComponent } from './acclanch.component';

describe('AcclanchComponent', () => {
  let component: AcclanchComponent;
  let fixture: ComponentFixture<AcclanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
