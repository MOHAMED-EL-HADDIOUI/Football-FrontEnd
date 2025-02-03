import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {GamesDTO} from '../Models/GamesDTO';
import {ClubDTO} from '../Models/ClubDTO';
import {GameDTO} from '../Models/GameDTO';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
  private apiUrl = environment.apiUrl+'/api/games/';
  constructor(private http: HttpClient) {}

  getGames(keyword: string,criteria: string, page: number): Observable<GamesDTO> {
    return this.http.get<GamesDTO>(this.apiUrl+"search?name="+keyword+"&page="+page+"&criteria="+criteria);
  }
  getGameById(gameId: number): Observable<GameDTO> {
    return this.http.get<GameDTO>(this.apiUrl+gameId);
  }
}
