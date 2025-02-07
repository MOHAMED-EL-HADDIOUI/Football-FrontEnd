import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompetitionsDTO} from '../Models/CompetitionsDTO';
import {ClubDTO} from '../Models/ClubDTO';
import {CompetitionDTO} from '../Models/CompetitionDTO';
import {Club_DTO} from '../Models/Club_DTO';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  private apiUrl = environment.apiUrl+'/api/competitions/';


  constructor(private http: HttpClient) {}
  getcompetitionById(competitionId: string): Observable<CompetitionDTO> {
    return this.http.get<CompetitionDTO>(this.apiUrl+competitionId);
  }
  getCompetitions(keyword: string, page: number): Observable<CompetitionsDTO> {
    return this.http.get<CompetitionsDTO>(this.apiUrl+"search?name="+keyword+"&page="+page);
  }
  addCompetition(newCompetition: CompetitionDTO): Observable<ClubDTO> {
    return this.http.post<ClubDTO>(this.apiUrl+'add', newCompetition);
  }

  updateCompetition(updateCompetition: CompetitionDTO) : Observable<ClubDTO> {
    return this.http.put<ClubDTO>(this.apiUrl+'update', updateCompetition);
  }

  deleteCompetitionById(competitionId: string) :Observable<any> {
    return this.http.delete<any>(this.apiUrl+'delete/'+competitionId);
  }
}
