import { TestBed } from '@angular/core/testing';

import { VoucherFacadeService } from './voucher-facade.service';

describe('VoucherFacadeService', () => {
  let service: VoucherFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
