import { TestBed } from '@angular/core/testing';

import { QuoteGeneratorService } from './quote-generator.service';

describe('QuoteGeneratorService', () => {
  let service: QuoteGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
