import { TestBed } from '@angular/core/testing';

import { ReceiptFacadeService } from './receipt-facade.service';

describe('ReceiptFacadeService', () => {
  let service: ReceiptFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
