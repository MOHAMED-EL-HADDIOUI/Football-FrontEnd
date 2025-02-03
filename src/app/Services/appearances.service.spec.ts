import { TestBed } from '@angular/core/testing';

import { AppearancesService } from './appearances.service';

describe('AppearancesService', () => {
  let service: AppearancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppearancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
