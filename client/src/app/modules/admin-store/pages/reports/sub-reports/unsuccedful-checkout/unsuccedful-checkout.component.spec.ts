import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnsuccedfulCheckoutComponent } from './unsuccedful-checkout.component';

describe('UnsuccedfulCheckoutComponent', () => {
  let component: UnsuccedfulCheckoutComponent;
  let fixture: ComponentFixture<UnsuccedfulCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsuccedfulCheckoutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnsuccedfulCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
