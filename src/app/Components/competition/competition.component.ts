import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ClubDTO} from '../../Models/ClubDTO';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {ActivatedRoute} from '@angular/router';
import {ClubsService} from '../../Services/clubs.service';
import {PlayerService} from '../../Services/player.service';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import {ClubsDTO} from '../../Models/ClubsDTO';

@Component({
  selector: 'app-competition',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgIf,
    NgForOf
  ],
  standalone:true,
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements  OnInit {
  competition!: CompetitionDTO;
  clubs: ClubDTO[] = [];
  page = 1;
  totalpage: number = 0;
  competitionId:string="";


  constructor(private route: ActivatedRoute, private competitionsService: CompetitionsService, private clubsService:ClubsService) {}

  ngOnInit(): void {
    this.competitionId = String(this.route.snapshot.paramMap.get('id'));
    this.getCompetition(this.competitionId);
    this.getListClubsByCompetition(this.competitionId,this.page-1);
  }

  getCompetition(competitionId: string):void{
    this.competitionsService.getcompetitionById(competitionId).subscribe((data) => {
      this.competition = data;
    });
  }
  getListClubsByCompetition(competitionId: string,page :number):void{
    this.clubsService.getListClubsByCompetition(competitionId, page).subscribe(
      (data) => {
        this.clubs = data.clubsDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total clubs count
      },
      (error) => {
        console.error('Error fetching clubs:', error);
      }
    );

  }
  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.getListClubsByCompetition(this.competitionId,this.page-1);
  }

}
