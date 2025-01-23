export interface CompetitionDTO {
  competitionId: string; // Identifiant de la compétition
  competitionCode: string; // Code de la compétition
  name: string; // Nom de la compétition
  subType: string; // Sous-type de la compétition
  type: string; // Type de la compétition
  countryId: string; // Identifiant du pays
  countryName: string; // Nom du pays
  domesticLeagueCode: string; // Code de la ligue nationale
  confederation: string; // Confédération (ex : UEFA, CAF)
  url: string; // URL associée
  isMajorNationalLeague: boolean; // Indique si c'est une ligue nationale majeure
}
