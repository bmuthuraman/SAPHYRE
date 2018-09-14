import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateInvestorModalComponent } from './associate-investor-modal.component';

describe('AssociateInvestorModalComponent', () => {
  let component: AssociateInvestorModalComponent;
  let fixture: ComponentFixture<AssociateInvestorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateInvestorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateInvestorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
