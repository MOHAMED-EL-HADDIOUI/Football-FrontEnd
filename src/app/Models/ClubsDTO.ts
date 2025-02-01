import {ClubDTO} from './ClubDTO';

export interface ClubsDTO {
  clubsDTOS: ClubDTO[]; // Liste des clubs
  totalpage: number; // Total des pages
}
