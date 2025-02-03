import {ClubDTO} from './ClubDTO';
import {PlayerDTO} from './PlayerDTO';

export interface TransferDTO {
  transferId: number;
  fromClub: ClubDTO;
  toClub: ClubDTO;
  player: PlayerDTO;
  transferDate: Date;
  transferSeason: string;
  fromClubName: string;
  toClubName: string;
  transferFee: number;
  marketValueInEur: number;
  playerName: string;
}
