import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {PlayerDTO} from '../Models/PlayerDTO';
import {TransferDTO} from '../Models/TransferDTO';
import {TransfersDTO} from '../Models/TransfersDTO';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  private apiUrl = environment.apiUrl+'/api/transfers/';

  constructor(private http: HttpClient) {}


  getTransfersByPlayer(playerId: number, page: number): Observable<TransfersDTO> {
    return this.http.get<TransfersDTO>(this.apiUrl+"player?playerId="+playerId+"&page="+page);
  }
}
