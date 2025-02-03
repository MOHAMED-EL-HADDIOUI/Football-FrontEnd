import {TransferDTO} from './TransferDTO';
import {PlayerValuationDTO} from './PlayerValuationDTO';

export interface PlayerValuationsDTO {
  playerValuationDTOS: PlayerValuationDTO[];
  totalpage: number; // Total des pages
}
