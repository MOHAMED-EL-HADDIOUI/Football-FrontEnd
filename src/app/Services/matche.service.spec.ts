import { TestBed } from '@angular/core/testing';

import { MatcheService } from './matche.service';

describe('MatcheService', () => {
  let service: MatcheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
