export interface Game_DTO {
  gameId: number;
  competition: string;
  season: number;
  round: string;
  date: Date;
  homeClub: string;
  awayClub: string;
  homeClubGoals: number;
  awayClubGoals: number;
  homeClubPosition: number | null; // Nullable equivalent of Double in Java
  awayClubPosition: number | null;
  homeClubManagerName: string;
  awayClubManagerName: string;
  stadium: string;
  attendance: number | null;
  referee: string;
  url: string;
  homeClubFormation: string;
  awayClubFormation: string;
  homeClubName: string;
  awayClubName: string;
  aggregate: string;
  competitionType: string;
}
