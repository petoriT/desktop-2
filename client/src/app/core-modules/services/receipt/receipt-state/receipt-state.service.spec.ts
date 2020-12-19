import { TestBed } from '@angular/core/testing';

import { ReceiptStateService } from './receipt-state.service';

describe('ReceiptStateService', () => {
  let service: ReceiptStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
