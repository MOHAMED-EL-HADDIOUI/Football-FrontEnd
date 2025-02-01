import {GameDTO} from './GameDTO';

export interface GamesDTO {
  gameDTOS: GameDTO[];
  totalpage: number; // Changed 'totalpage' to camelCase as per TypeScript conventions
}
