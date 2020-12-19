import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnsPage } from './returns.page';

describe('ReturnsPage', () => {
  let component: ReturnsPage;
  let fixture: ComponentFixture<ReturnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
