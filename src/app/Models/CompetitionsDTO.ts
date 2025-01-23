import {CompetitionDTO} from './CompetitionDTO';

export interface CompetitionsDTO {
  competitionDTOS: CompetitionDTO[]; // Liste des compétitions
  totalPage: number; // Nombre total de pages
}
