import { TestBed } from '@angular/core/testing';

import { ClubGamesService } from './club-games.service';

describe('ClubGamesService', () => {
  let service: ClubGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
