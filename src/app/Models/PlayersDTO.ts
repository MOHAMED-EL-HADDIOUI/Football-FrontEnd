import {PlayerDTO} from './PlayerDTO';

export interface PlayersDTO {
  playerDTOS: PlayerDTO[]; // Liste de joueurs
  totalPage: number; // Total des pages
}
