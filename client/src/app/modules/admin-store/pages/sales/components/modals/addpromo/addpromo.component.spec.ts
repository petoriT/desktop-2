import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpromoComponent } from './addpromo.component';

describe('AddpromoComponent', () => {
  let component: AddpromoComponent;
  let fixture: ComponentFixture<AddpromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpromoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
