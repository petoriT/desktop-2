import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreSelectionsPage } from './store-selections.page';

describe('StoreSelectionsPage', () => {
  let component: StoreSelectionsPage;
  let fixture: ComponentFixture<StoreSelectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSelectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreSelectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
