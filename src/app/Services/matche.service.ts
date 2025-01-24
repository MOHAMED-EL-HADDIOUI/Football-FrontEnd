import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayersDTO} from '../Models/PlayersDTO';
import {GamesDTO} from '../Models/GamesDTO';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
  private apiUrl = environment.apiUrl+'/api/games/search';


  constructor(private http: HttpClient) {}

  getGames(keyword: string,criteria: string, page: number): Observable<GamesDTO> {
    return this.http.get<GamesDTO>(this.apiUrl+"?name="+keyword+"&page="+page+"&criteria="+criteria);
  }
}
