import { TestBed } from '@angular/core/testing';

import { ActivityCacheService } from './activity-cache.service';

describe('ActivityCacheService', () => {
  let service: ActivityCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
