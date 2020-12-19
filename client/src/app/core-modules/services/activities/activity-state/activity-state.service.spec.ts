import { TestBed } from '@angular/core/testing';

import { ActivityStateService } from './activity-state.service';

describe('ActivityStateService', () => {
  let service: ActivityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
