import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompetitionsDTO} from '../Models/CompetitionsDTO';
import {ClubsDTO} from '../Models/ClubsDTO';
import {ClubDTO} from '../Models/ClubDTO';
import {PlayersDTO} from '../Models/PlayersDTO';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private apiUrl = environment.apiUrl+'/api/clubs/';
  constructor(private http: HttpClient) {}

  getClubs(keyword: string, page: number): Observable<ClubsDTO> {
    return this.http.get<ClubsDTO>(this.apiUrl+"search?name="+keyword+"&page="+page);
  }

  getClubById(clubId: number): Observable<ClubDTO> {
    return this.http.get<ClubDTO>(this.apiUrl+clubId);
  }
  getListClubsByCompetition(idCompetition: string, page: number): Observable<ClubsDTO> {
    return this.http.get<ClubsDTO>(this.apiUrl+"competition?idCompetition="+idCompetition+"&page="+page);
  }

  addClub(newClub: ClubDTO): Observable<ClubDTO> {
    return this.http.post<ClubDTO>(this.apiUrl+'/add', newClub);
  }

}
