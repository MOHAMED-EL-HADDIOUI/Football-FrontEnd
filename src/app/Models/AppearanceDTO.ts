import {PlayerDTO} from './PlayerDTO';
import {ClubDTO} from './ClubDTO';
import {CompetitionDTO} from './CompetitionDTO';
import {GameDTO} from './GameDTO';

export interface AppearanceDTO {
  appearanceId: string;
  player: PlayerDTO;
  club: ClubDTO;
  currentclub: ClubDTO;
  date: Date;
  playerName: string;
  yellowCards: number;
  redCards: number;
  goals: number;
  assists: number;
  minutesPlayed: number;
  game: GameDTO;
  competition: CompetitionDTO;
}
