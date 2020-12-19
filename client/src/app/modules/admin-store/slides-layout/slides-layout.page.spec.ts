import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesLayoutPage } from './slides-layout.page';

describe('SlidesLayoutPage', () => {
  let component: SlidesLayoutPage;
  let fixture: ComponentFixture<SlidesLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
