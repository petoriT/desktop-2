import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnPolicyPage } from './return-policy.page';

describe('ReturnPolicyPage', () => {
  let component: ReturnPolicyPage;
  let fixture: ComponentFixture<ReturnPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
