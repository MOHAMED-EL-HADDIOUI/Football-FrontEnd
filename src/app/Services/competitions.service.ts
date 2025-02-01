import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompetitionsDTO} from '../Models/CompetitionsDTO';
import {ClubDTO} from '../Models/ClubDTO';
import {CompetitionDTO} from '../Models/CompetitionDTO';

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
}
