import { TestBed } from '@angular/core/testing';

import { PayfastFacadeService } from './payfast-facade.service';

describe('PayfastFacadeService', () => {
  let service: PayfastFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayfastFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
