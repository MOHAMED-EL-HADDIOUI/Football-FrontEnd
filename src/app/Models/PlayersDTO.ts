import {PlayerDTO} from './PlayerDTO';

export interface PlayersDTO {
  playerDTOS: PlayerDTO[]; // Liste de joueurs
  totalpage: number; // Total des pages
}
