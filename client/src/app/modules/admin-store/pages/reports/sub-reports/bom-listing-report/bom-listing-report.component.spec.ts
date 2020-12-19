import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BOMListingReportComponent } from './bom-listing-report.component';

describe('BOMListingReportComponent', () => {
  let component: BOMListingReportComponent;
  let fixture: ComponentFixture<BOMListingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOMListingReportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BOMListingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
