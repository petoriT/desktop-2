import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeAllProductsHomePage } from './see-all-products-home.page';

describe('SeeAllProductsHomePage', () => {
  let component: SeeAllProductsHomePage;
  let fixture: ComponentFixture<SeeAllProductsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllProductsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeAllProductsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
