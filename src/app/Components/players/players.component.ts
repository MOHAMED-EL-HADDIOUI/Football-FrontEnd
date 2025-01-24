import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {HttpClientModule} from '@angular/common/http';
import {PlayersDTO} from '../../Models/PlayersDTO';

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
  page = 0;
  searchCriteria = 'name'; // Par défaut, critère de recherche = 'name'
  totalPages: number = 0;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers(this.searchKeyword,this.searchCriteria, this.page).subscribe(
      (data) => {
        this.players = data.playerDTOS;
        this.totalPages = data.totalPage; // Assuming the service returns total players count
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }

  searchPlayers(): void {
    this.page = 0;
    this.loadPlayers();
  }

  changePage(d: string): void {
    console.log("this.totalPages " + this.totalPages)
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadPlayers();
  }
}
