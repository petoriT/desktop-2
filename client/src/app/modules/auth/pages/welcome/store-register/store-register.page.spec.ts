import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegisterPage } from './store-register.page';

describe('StoreRegisterPage', () => {
  let component: StoreRegisterPage;
  let fixture: ComponentFixture<StoreRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
