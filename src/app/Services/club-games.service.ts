import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClubGamesDTO} from '../Models/ClubGamesDTO';

@Injectable({
  providedIn: 'root'
})
export class ClubGamesService {
  private apiUrl = environment.apiUrl+'/api/clubgames/';
  constructor(private http: HttpClient) {}
  getClubGamesByGame(gameId: number, page: number): Observable<ClubGamesDTO> {
    return this.http.get<ClubGamesDTO>(this.apiUrl+"game?gameId="+gameId+"&page="+page);
  }
}
