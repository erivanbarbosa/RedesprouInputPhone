import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesprouInputPhoneComponent } from './redesprou-input-phone.component';

describe('RedesprouInputPhoneComponent', () => {
  let component: RedesprouInputPhoneComponent;
  let fixture: ComponentFixture<RedesprouInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesprouInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesprouInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
