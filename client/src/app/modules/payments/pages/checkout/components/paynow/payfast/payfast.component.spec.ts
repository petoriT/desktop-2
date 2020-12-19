import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfastComponent } from './payfast.component';

describe('PayfastComponent', () => {
  let component: PayfastComponent;
  let fixture: ComponentFixture<PayfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfastComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
