import { TestBed } from '@angular/core/testing';

import { PlayerValuationsService } from './player-valuations.service';

describe('PlayerValuationsService', () => {
  let service: PlayerValuationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerValuationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
