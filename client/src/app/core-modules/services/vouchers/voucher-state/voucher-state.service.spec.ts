import { TestBed } from '@angular/core/testing';

import { VoucherStateService } from './voucher-state.service';

describe('VoucherStateService', () => {
  let service: VoucherStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
