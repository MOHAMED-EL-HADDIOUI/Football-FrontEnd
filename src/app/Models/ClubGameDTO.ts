import {GameDTO} from './GameDTO';
import {ClubDTO} from './ClubDTO';

export interface ClubGameDTO {
  clubGameId: number;
  game: GameDTO;
  club: ClubDTO;
  ownGoals: number;
  ownPosition: number;
  ownManagerName: string;
  opponentclub: ClubDTO;
  opponentGoals: number;
  opponentPosition: number;
  opponentManagerName: string;
  hosting: string;
  isWin: number;
}
