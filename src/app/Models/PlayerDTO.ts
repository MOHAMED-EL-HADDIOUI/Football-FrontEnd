import {ClubDTO} from './ClubDTO';
import {CompetitionDTO} from './CompetitionDTO';

export interface PlayerDTO {
  playerId: number;
  firstName: string;
  lastName: string;
  name: string;
  lastSeason: number;
  currentClub: ClubDTO;

  playerCode: string;
  countryOfBirth: string;
  cityOfBirth: string;
  countryOfCitizenship: string;
  dateOfBirth: Date;
  subPosition: string;
  position: string;
  foot: string;
  heightInCm: number;
  contractExpirationDate: Date;
  agentName: string;
  imageUrl: string;
  url: string;
  competition: CompetitionDTO;

  currentClubName: string;
  marketValueInEur: number;
  highestMarketValueInEur: number;
}
