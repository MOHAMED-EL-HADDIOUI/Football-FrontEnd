import { TestBed } from '@angular/core/testing';

import { ClubsService } from './clubs.service';

describe('ClubsService', () => {
  let service: ClubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
