import { TestBed } from '@angular/core/testing';

import { ConfirmProductsService } from './confirm-products.service';

describe('ConfirmProductsService', () => {
  let service: ConfirmProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
