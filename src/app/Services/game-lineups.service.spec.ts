import { TestBed } from '@angular/core/testing';

import { GameLineupsService } from './game-lineups.service';

describe('GameLineupsService', () => {
  let service: GameLineupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLineupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
