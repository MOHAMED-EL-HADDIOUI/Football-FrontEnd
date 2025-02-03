import {ClubDTO} from './ClubDTO';
import {PlayerDTO} from './PlayerDTO';
import {CompetitionDTO} from './CompetitionDTO';

export interface PlayerValuationDTO {
  valuationId: number;
  currentClub: ClubDTO;
  player: PlayerDTO;
  date: Date;
  marketValueInEur: number;
  competition: CompetitionDTO;
}
