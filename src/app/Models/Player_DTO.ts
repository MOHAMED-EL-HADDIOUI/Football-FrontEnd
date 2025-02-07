export interface Player_DTO {
  playerId: number;
  firstName: string;
  lastName: string;
  name: string;
  lastSeason: number;
  currentClub: string;
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
  competition: string;
  currentClubName: string;
  marketValueInEur: number;
  highestMarketValueInEur: number;
}
