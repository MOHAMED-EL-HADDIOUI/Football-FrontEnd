import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {GameDTO} from '../../Models/GameDTO';
import {MatcheService} from '../../Services/matche.service';
import {Router} from '@angular/router';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {ClubDTO} from '../../Models/ClubDTO';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import {ClubsService} from '../../Services/clubs.service';
import Swal from 'sweetalert2';
import {Player_DTO} from '../../Models/Player_DTO';
import {Game_DTO} from '../../Models/Game_DTO';

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

  isModalOpen = false;
  isModalOpen_ = false;
  matcheForm!: FormGroup;

  clubs: ClubDTO[] = [];
  searchKeyword_ = '';
  page_ = 1;
  totalpage_: number = 0;


  clubs_: ClubDTO[] = [];
  searchKeyword_1 = '';
  page_1 = 1;
  totalpage_1: number = 0;

  competitions: CompetitionDTO[] = [];
  searchKeyword__ = '';
  page__ = 1;
  totalpage__: number = 0;


  constructor(private matcheService: MatcheService,private competitionsService:CompetitionsService,private clubsService :ClubsService,private router:Router,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.matcheForm = this.fb.group({
      gameId: [null],
      round: ['', Validators.required],
      lastName: ['', Validators.required],
      awayClubGoals: ['',Validators.required],
      homeClubGoals: ['',Validators.required],
      awayClubPosition: ['',Validators.required],
      homeClubPosition: ['',Validators.required],
      season: ['',Validators.required],
      homeClub: ['', Validators.required],
      awayClub: ['', Validators.required],
      date: ['', Validators.required],
      attendance: ['', Validators.required],
      stadium: ['', Validators.required],
      awayClubManagerName: ['', Validators.required],
      homeClubManagerName: ['', Validators.required],
      awayClubFormation: ['', Validators.required],
      homeClubFormation: ['', Validators.required],
      awayClubName: ['',],
      homeClubName: ['',],
      referee:['', Validators.required],
      url: [''],
      competition: ['', Validators.required],
      aggregate: ['', Validators.required],
      competitionType: ['', Validators.required],
    });
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
  loadClubs_(): void {
    this.clubsService.getClubs(this.searchKeyword_1, this.page_1-1).subscribe(
      (data) => {
        this.clubs_ = data.clubsDTOS;
        this.totalpage_1 = data.totalpage; // Assuming the service returns total clubs count
      },
      (error) => {
        console.error('Error fetching clubs:', error);
      }
    );
  }
  searchClubs_(): void {
    this.page_1 = 1;
    this.loadClubs_();
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
    this.loadGames();
  }
  changePage_(d: string): void {
    if (d === 'left') {
      this.page_ = this.page_ - 1;
    } else {
      this.page_ = this.page_ + 1;
    }
    this.loadClubs();
  }
  changePage_1(d: string): void {
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
  navigateToMatche(id_matche: number) {
    this.router.navigate(['/matches/', id_matche]);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }


  addMatche() {
    if (this.matcheForm.valid) {
      const newGame: Game_DTO = {
        ...this.matcheForm.value
      };
      this.matcheService.addGame(newGame).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le Matche a été ajouté avec succès !',
            showConfirmButton: true,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erreur lors de l’ajout du matche :',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      this.closeModal();
      this.matcheForm.reset();
    }

  }
  updateMatche() {
    if (this.matcheForm.valid) {
      const updateGame: Game_DTO = {
        ...this.matcheForm.value
      };
      this.matcheService.updateGame(updateGame).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le Matche a été modifié avec succès !',
            showConfirmButton: true,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erreur lors de le modifier du Matche :',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      this.closeModal_();
      this.matcheForm.reset();
    }
  }
  deleteMatche(match:GameDTO) {
    this.matcheService.deleteGameById(match.gameId).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Le match a été supprimé avec succès !',
          showConfirmButton: true,
          timer: 1500
        });
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Erreur lors de l’supprime du matche :',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.matcheForm.reset(); // Réinitialisation du formulaire
  }
  openModal_(matcheData :GameDTO) {
    this.matcheForm = this.fb.group({
      gameId: matcheData.gameId,
      round: matcheData.round,
      lastName: matcheData.round,
      awayClubGoals: matcheData.awayClubGoals,
      homeClubGoals: matcheData.homeClubGoals,
      awayClubPosition: matcheData.awayClubPosition,
      homeClubPosition: matcheData.homeClubPosition,
      season: matcheData.season,
      homeClub: matcheData.homeClub,
      awayClub: matcheData.awayClub,
      date: [matcheData.date ? new Date(matcheData.date).toISOString().split('T')[0] : null],
      attendance: matcheData.attendance,
      stadium: matcheData.stadium,
      awayClubManagerName: matcheData.awayClubManagerName,
      homeClubManagerName: matcheData.homeClubManagerName,
      awayClubFormation: matcheData.awayClubFormation,
      homeClubFormation: matcheData.homeClubFormation,
      awayClubName: matcheData.awayClubName,
      homeClubName: matcheData.homeClubName,
      referee:matcheData.referee,
      url: matcheData.url,
      competition: matcheData.competition,
      aggregate: matcheData.aggregate,
      competitionType: matcheData.competitionType,
    });
    this.isModalOpen_ = true;
  }
  closeModal_() {
    this.isModalOpen_ = false;
    this.matcheForm.reset(); // Réinitialisation du formulaire

  }

}
