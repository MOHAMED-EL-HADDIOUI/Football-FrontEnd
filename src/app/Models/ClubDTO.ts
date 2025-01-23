import {CompetitionDTO} from './CompetitionDTO';

export interface ClubDTO {
  clubId: number; // Identifiant du club
  clubCode: string; // Code du club
  name: string; // Nom du club
  domesticCompetition: CompetitionDTO; // Compétition nationale du club
  totalMarketValue: number; // Valeur totale du marché
  squadSize: number; // Taille de l'effectif
  averageAge: number; // Âge moyen
  foreignersNumber: number; // Nombre de joueurs étrangers
  foreignersPercentage: number; // Pourcentage de joueurs étrangers
  nationalTeamPlayers: number; // Nombre de joueurs en équipe nationale
  stadiumName: string; // Nom du stade
  stadiumSeats: number; // Nombre de places dans le stade
  netTransferRecord: string; // Historique des transferts nets
  coachName: string; // Nom de l'entraîneur
  lastSeason: number; // Dernière saison
  filename: string; // Nom du fichier
  url: string; // URL associée
}
