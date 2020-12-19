import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductAdditionPage } from './product-addition.page';

describe('ProductAdditionPage', () => {
  let component: ProductAdditionPage;
  let fixture: ComponentFixture<ProductAdditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
