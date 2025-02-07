import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompetitionsDTO} from '../Models/CompetitionsDTO';
import {ClubsDTO} from '../Models/ClubsDTO';
import {ClubDTO} from '../Models/ClubDTO';
import {PlayersDTO} from '../Models/PlayersDTO';
import {Club_DTO} from '../Models/Club_DTO';

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

  addClub(newClub: Club_DTO): Observable<ClubDTO> {
    return this.http.post<ClubDTO>(this.apiUrl+'add', newClub);
  }
  updateClub(updateClub: Club_DTO): Observable<ClubDTO> {
    return this.http.put<ClubDTO>(this.apiUrl+'update', updateClub);
  }

  deleteClubById(clubId: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'delete/'+clubId);
  }
}
