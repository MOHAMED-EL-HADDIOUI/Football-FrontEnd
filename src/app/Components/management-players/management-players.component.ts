import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {Router} from '@angular/router';
import {ClubDTO} from '../../Models/ClubDTO';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {ClubsService} from '../../Services/clubs.service';
import {CompetitionsService} from '../../Services/competitions.service';

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
  searchCriteria = 'name';
  totalpage: number = 0;

  playerForm!: FormGroup;

  clubs: ClubDTO[] = [];
  searchKeyword_ = '';
  page_ = 1;
  totalpage_: number = 0;

  isModalOpen = false;
  isModalOpen_ = false;

  competitions: CompetitionDTO[] = [];
  searchKeyword__ = '';
  page__ = 1;
  totalpage__: number = 0;

  playerData!:PlayerDTO;

  constructor(private playerService: PlayerService,private router: Router,private fb: FormBuilder,private clubsService:ClubsService,private competitionsService: CompetitionsService) {
  }

  ngOnInit(): void {
    this.loadPlayers();
    this.loadCompetitions();
    this.loadClubs();
    this.playerForm = this.fb.group({
      playerId: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      lastSeason: [null],
      currentClub: [null, Validators.required],
      playerCode: [''],
      countryOfBirth: [''],
      cityOfBirth: [''],
      countryOfCitizenship: [''],
      dateOfBirth: [null, Validators.required],
      subPosition: [''],
      position: ['', Validators.required],
      foot: [''],
      heightInCm: [null],
      contractExpirationDate: [null],
      agentName: [''],
      imageUrl: [''],
      url: [''],
      competition: [null, Validators.required],
      currentClubName: [''],
      marketValueInEur: [null],
      highestMarketValueInEur: [null],
    });
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

  loadClubs(): void {
    this.clubsService.getClubs(this.searchKeyword_, this.page_-1).subscribe(
      (data) => {
        this.clubs = data.clubsDTOS;
        this.totalpage_ = data.totalpage; // Assuming the service returns total clubs count
      },
      (error) => {
        console.error('Error fetching clubs:', error);
      }
    );
  }
  loadCompetitions(): void {
    this.competitionsService.getCompetitions(this.searchKeyword__, this.page__-1).subscribe(
      (data) => {
        this.competitions = data.competitionDTOS;
        this.totalpage__ = data.totalpage; // Assuming the service returns total Competitions count
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }
  searchCompetitions(): void {
    this.page__ = 1;
    this.loadCompetitions();
  }

  searchClubs(): void {
    this.page_ = 1;
    this.loadClubs();
  }


  changePage(d: string): void {
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

  addPlayer() {

  }

  changePage_(d: string): void {
    if (d === 'left') {
      this.page_ = this.page_ - 1;
    } else {
      this.page_ = this.page_ + 1;
    }
    this.loadClubs();
  }
  changePage__(d: string): void {
    if (d === 'left') {
      this.page__ = this.page__ - 1;
    } else {
      this.page__ = this.page__ + 1;
    }
    this.loadCompetitions();
  }

  closeModal() {
    this.isModalOpen = false;
  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal_() {
    this.isModalOpen_ = false;
  }
  openModal_(playerData:PlayerDTO) {
    this.isModalOpen_ = true;
  }

  updatePlayer() {

  }
}
