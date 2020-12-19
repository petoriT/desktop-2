import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromotionAdditionPage } from './promotion-addition.page';

describe('PromotionAdditionPage', () => {
  let component: PromotionAdditionPage;
  let fixture: ComponentFixture<PromotionAdditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionAdditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionAdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
