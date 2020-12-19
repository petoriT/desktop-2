import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLikedComponent } from './user-liked.component';

describe('UserLikedComponent', () => {
  let component: UserLikedComponent;
  let fixture: ComponentFixture<UserLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLikedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
