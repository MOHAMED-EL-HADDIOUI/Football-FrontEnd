import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {environment} from '../environments/environment';
import {ClubDTO} from '../Models/ClubDTO';
import {PlayerDTO} from '../Models/PlayerDTO';

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

}
