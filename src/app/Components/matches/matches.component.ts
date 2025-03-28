import {Component, OnInit} from '@angular/core';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule} from '@angular/forms';
import {GameDTO} from '../../Models/GameDTO';
import {MatcheService} from '../../Services/matche.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {
  title = 'Matches';

  games: GameDTO[] = [];
  searchKeyword = '';
  page = 1;
  searchCriteria = 'Club'; // Par défaut, critère de recherche = 'name'
  totalpage: number = 0;

  constructor(private matcheService: MatcheService,private router:Router,private titleService: Title) {
    this.setTitle(this.title);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
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
