import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalItemsOutComponent } from './total-items-out.component';

describe('TotalItemsOutComponent', () => {
  let component: TotalItemsOutComponent;
  let fixture: ComponentFixture<TotalItemsOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalItemsOutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalItemsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
