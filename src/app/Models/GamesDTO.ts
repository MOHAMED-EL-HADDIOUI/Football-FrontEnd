import {GameDTO} from './GameDTO';

export interface GamesDTO {
  gameDTOS: GameDTO[];
  totalPage: number; // Changed 'totalpage' to camelCase as per TypeScript conventions
}
