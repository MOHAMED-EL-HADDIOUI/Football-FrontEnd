import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TransfersDTO} from '../Models/TransfersDTO';
import {AppearancesDTO} from '../Models/GameEventsDTO';

@Injectable({
  providedIn: 'root'
})
export class AppearancesService {

  private apiUrl = environment.apiUrl+'/api/appearances/';

  constructor(private http: HttpClient) {}
  getAppearancesByPlayer(playerId: number, page: number): Observable<AppearancesDTO> {
    return this.http.get<AppearancesDTO>(this.apiUrl+"player?playerId="+playerId+"&page="+page);
  }
}
