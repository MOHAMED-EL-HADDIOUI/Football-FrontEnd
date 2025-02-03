import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-management-players',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    CurrencyPipe
  ],
  standalone:true,
  templateUrl: './management-players.component.html',
  styleUrl: './management-players.component.css'
})
export class ManagementPlayersComponent implements OnInit{
  players: PlayerDTO[] = [];
  searchKeyword = '';
  page = 1;
  searchCriteria = 'name'; // Par défaut, critère de recherche = 'name'
  totalpage: number = 0;

  constructor(private playerService: PlayerService,private router: Router) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers(this.searchKeyword,this.searchCriteria, this.page-1).subscribe(
      (data) => {
        this.players = data.playerDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total players count
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }

  searchPlayers(): void {
    this.page = 1;
    this.loadPlayers();
  }

  changePage(d: string): void {
    console.log("this.totalPages " + this.totalpage)
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadPlayers();
  }
  navigateToPlayer(id_player: number) {
    this.router.navigate(['/players/', id_player]);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }

}
