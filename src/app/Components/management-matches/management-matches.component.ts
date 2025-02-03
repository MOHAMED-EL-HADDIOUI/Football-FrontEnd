import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GameDTO} from '../../Models/GameDTO';
import {MatcheService} from '../../Services/matche.service';
import {Router} from '@angular/router';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-management-matches',
  imports: [
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgForOf,
    DatePipe
  ],
  standalone:true,
  templateUrl: './management-matches.component.html',
  styleUrl: './management-matches.component.css'
})
export class ManagementMatchesComponent implements OnInit{
  games: GameDTO[] = [];
  searchKeyword = '';
  page = 1;
  searchCriteria = 'Club'; // Par défaut, critère de recherche = 'name'
  totalpage: number = 0;

  constructor(private matcheService: MatcheService,private router:Router) {
  }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.matcheService.getGames(this.searchKeyword,this.searchCriteria, this.page-1).subscribe(
      (data) => {
        this.games = data.gameDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total players count
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  searchGames(): void {
    this.page = 1;
    this.loadGames();
  }

  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadGames();
  }
  navigateToMatche(id_matche: number) {
    this.router.navigate(['/matches/', id_matche]);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }


}
