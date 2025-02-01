import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {HttpClientModule} from '@angular/common/http';
import {PlayersDTO} from '../../Models/PlayersDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    DecimalPipe,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {
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
}
