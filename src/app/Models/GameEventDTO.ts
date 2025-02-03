import {GameDTO} from './GameDTO';
import {ClubDTO} from './ClubDTO';
import {PlayerDTO} from './PlayerDTO';

export interface GameEventDTO {
  gameEventId: string;
  date: Date;
  minute: number;
  type: string;
  game: GameDTO;
  club: ClubDTO;
  player: PlayerDTO;
  description: string;
  playerIn?: PlayerDTO;
  playerAssist?: PlayerDTO;
}
