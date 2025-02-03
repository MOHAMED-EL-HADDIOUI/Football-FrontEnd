import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameEventsDTO} from '../Models/GameEventsDTO';

@Injectable({
  providedIn: 'root'
})
export class GameEventsService {

  private apiUrl = environment.apiUrl+'/api/gameevents/';

  constructor(private http: HttpClient) {}


  getGameEventsByGame(gameId: number, page: number): Observable<GameEventsDTO> {
    return this.http.get<GameEventsDTO>(this.apiUrl+"game?gameId="+gameId+"&page="+page);
  }
}
