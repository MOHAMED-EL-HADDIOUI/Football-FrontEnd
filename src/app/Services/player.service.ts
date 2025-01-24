import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = environment.apiUrl+'/api/players/search';

  constructor(private http: HttpClient) {}

  getPlayers(keyword: string,criteria: string, page: number): Observable<PlayersDTO> {
    return this.http.get<PlayersDTO>(this.apiUrl+"?name="+keyword+"&page="+page+"&criteria="+criteria);
  }
}
