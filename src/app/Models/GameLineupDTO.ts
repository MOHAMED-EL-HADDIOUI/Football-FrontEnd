import {GameDTO} from './GameDTO';
import {ClubDTO} from './ClubDTO';
import {PlayerDTO} from './PlayerDTO';

export interface GameLineupDTO {
  gameLineupsId: string;
  date: Date;
  game: GameDTO;
  club: ClubDTO;
  player: PlayerDTO;
  playerName: string;
  type: string;
  position: string;
  number: string;
  teamCaptain: number;
}
