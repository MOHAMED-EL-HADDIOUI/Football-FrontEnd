import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameEventsDTO} from '../Models/GameEventsDTO';
import {GameLineupsDTO} from '../Models/GameLineupsDTO';

@Injectable({
  providedIn: 'root'
})
export class GameLineupsService {

  private apiUrl = environment.apiUrl+'/api/gamelineups/';

  constructor(private http: HttpClient) {}


  getGameLineupsByGame(gameId: number, page: number): Observable<GameLineupsDTO> {
    return this.http.get<GameLineupsDTO>(this.apiUrl+"game?gameId="+gameId+"&page="+page);
  }}
