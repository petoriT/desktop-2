import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsaleComponent } from './runsale.component';

describe('RunsaleComponent', () => {
  let component: RunsaleComponent;
  let fixture: ComponentFixture<RunsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunsaleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
