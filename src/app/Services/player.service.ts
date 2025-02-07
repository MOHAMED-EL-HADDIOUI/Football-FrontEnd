import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {environment} from '../environments/environment';
import {ClubDTO} from '../Models/ClubDTO';
import {PlayerDTO} from '../Models/PlayerDTO';
import {CompetitionDTO} from '../Models/CompetitionDTO';
import {Player_DTO} from '../Models/Player_DTO';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = environment.apiUrl+'/api/players/';

  constructor(private http: HttpClient) {}

  getPlayers(keyword: string,criteria: string, page: number): Observable<PlayersDTO> {
    return this.http.get<PlayersDTO>(this.apiUrl+"search?name="+keyword+"&page="+page+"&criteria="+criteria);
  }
  getListPlayersByCurrentClub(idclub: number, page: number): Observable<PlayersDTO> {
    return this.http.get<PlayersDTO>(this.apiUrl+"club?idclub="+idclub+"&page="+page);
  }
  getPlayerById(playerId: number): Observable<PlayerDTO> {
    return this.http.get<PlayerDTO>(this.apiUrl+playerId);
  }

  addPlayer(newPlayer: Player_DTO): Observable<PlayerDTO> {
    return this.http.post<PlayerDTO>(this.apiUrl+'add', newPlayer);
  }
  updatePlayer(updatePlayer: Player_DTO): Observable<PlayerDTO> {
    return this.http.put<PlayerDTO>(this.apiUrl+'update', updatePlayer);
  }
  deletePlayerById(playerId: number) :Observable<any> {
    return this.http.delete<any>(this.apiUrl+'delete/'+playerId);
  }
}
