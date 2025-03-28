import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ClubDTO} from '../../Models/ClubDTO';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {ClubsService} from '../../Services/clubs.service';
import {PlayerService} from '../../Services/player.service';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import {ClubsDTO} from '../../Models/ClubsDTO';
import {Title} from '@angular/platform-browser';

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
  title = '';
  competition!: CompetitionDTO;
  clubs: ClubDTO[] = [];
  page = 1;
  totalpage: number = 0;
  competitionId:string="";


  constructor(private route: ActivatedRoute,private router:Router,private competitionsService: CompetitionsService, private clubsService:ClubsService,private titleService: Title) {}

  ngOnInit(): void {
    this.competitionId = String(this.route.snapshot.paramMap.get('id'));
    this.getCompetition(this.competitionId);
    this.getListClubsByCompetition(this.competitionId,this.page-1);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCompetition(competitionId: string):void{
    this.competitionsService.getcompetitionById(competitionId).subscribe((data) => {
      this.competition = data;
      this.setTitle(this.competition.name);
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
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }

}
