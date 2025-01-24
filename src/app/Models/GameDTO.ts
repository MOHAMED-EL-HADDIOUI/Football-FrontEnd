import {CompetitionDTO} from './CompetitionDTO';
import {ClubDTO} from './ClubDTO';

export interface GameDTO {
  gameId: number;
  competition: CompetitionDTO;
  season: number;
  round: string;
  date: Date;
  homeClub: ClubDTO;
  awayClub: ClubDTO;
  homeClubGoals: number;
  awayClubGoals: number;
  homeClubPosition: number | null; // Nullable equivalent of Double in Java
  awayClubPosition: number | null;
  homeClubManagerName: string;
  awayClubManagerName: string;
  stadium: string;
  attendance: number | null;
  referee: string;
  url: string;
  homeClubFormation: string;
  awayClubFormation: string;
  homeClubName: string;
  awayClubName: string;
  aggregate: string;
  competitionType: string;
}
