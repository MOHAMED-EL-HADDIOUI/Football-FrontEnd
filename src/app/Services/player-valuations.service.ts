import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayerValuationsDTO} from '../Models/PlayerValuationsDTO';

@Injectable({
  providedIn: 'root'
})
export class PlayerValuationsService {
  private apiUrl = environment.apiUrl+'/api/playervaluations/';
  constructor(private http: HttpClient) {}
  getPlayerValuationsByPlayer(playerId: number, page: number): Observable<PlayerValuationsDTO> {
    return this.http.get<PlayerValuationsDTO>(this.apiUrl+"player?playerId="+playerId+"&page="+page);
  }
}
