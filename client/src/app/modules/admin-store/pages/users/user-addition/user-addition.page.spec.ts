import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAdditionPage } from './user-addition.page';

describe('UserAdditionPage', () => {
  let component: UserAdditionPage;
  let fixture: ComponentFixture<UserAdditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
