import {CompetitionDTO} from './CompetitionDTO';

export interface CompetitionsDTO {
  competitionDTOS: CompetitionDTO[]; // Liste des compétitions
  totalpage: number; // Nombre total de pages
}
