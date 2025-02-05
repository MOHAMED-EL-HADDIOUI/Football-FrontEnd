import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClubDTO} from '../../Models/ClubDTO';
import {ClubsService} from '../../Services/clubs.service';
import {Router} from '@angular/router';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-management-clubs',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone:true,
  templateUrl: './management-clubs.component.html',
  styleUrl: './management-clubs.component.css'
})
export class ManagementClubsComponent implements OnInit{
  clubs: ClubDTO[] = [];
  searchKeyword = '';
  page = 1;
  totalpage: number = 0;
  clubData!:ClubDTO;
  isModalOpen = false;
  isModalOpen_ = false;
  clubForm!: FormGroup;

  competitions: CompetitionDTO[] = [];
  searchKeyword1 = '';
  page_ = 1;
  totalpage_: number = 0;

  constructor(private clubsService: ClubsService,private competitionsService: CompetitionsService,private router: Router,private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.loadClubs();
    this.loadCompetitions();
    this.clubForm = this.fb.group({
      clubCode: ['', Validators.required],
      name: ['', Validators.required],
      totalMarketValue: [0, Validators.required],
      domesticCompetition:['', Validators.required],
      squadSize: [0, Validators.required],
      averageAge: [0, Validators.required],
      foreignersNumber: [0, Validators.required],
      foreignersPercentage: [0, Validators.required],
      nationalTeamPlayers: [0, Validators.required],
      stadiumName: ['', Validators.required],
      stadiumSeats: [0, Validators.required],
      netTransferRecord: ['', Validators.required],
      coachName: ['', Validators.required],
      lastSeason: [new Date().getFullYear(), Validators.required],
      filename: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  loadClubs(): void {
    this.clubsService.getClubs(this.searchKeyword, this.page-1).subscribe(
      (data) => {
        this.clubs = data.clubsDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total clubs count
      },
      (error) => {
        console.error('Error fetching clubs:', error);
      }
    );
  }
  loadCompetitions(): void {
    this.competitionsService.getCompetitions(this.searchKeyword1, this.page_-1).subscribe(
      (data) => {
        this.competitions = data.competitionDTOS;
        this.totalpage_ = data.totalpage; // Assuming the service returns total Competitions count
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }
  searchCompetitions(): void {
    this.page_ = 1;
    this.loadCompetitions();
  }

  searchClubs(): void {
    this.page = 1;
    this.loadClubs();
  }

  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadClubs();
  }
  changePage_(d: string): void {
    if (d === 'left') {
      this.page_ = this.page_ - 1;
    } else {
      this.page_ = this.page_ + 1;
    }
    this.loadCompetitions();
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  openModal() {
    this.isModalOpen = true;
    this.loadCompetitions();
  }
  openModal_(clubData:ClubDTO) {
    this.clubData=clubData;
    this.isModalOpen_ = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  closeModal_() {
    this.isModalOpen_ = false;
  }
  addClub() {
    if (this.clubForm.valid) {
      const newClub: ClubDTO = {
        clubId: '',
        ...this.clubForm.value
      };
      console.log(newClub)
      this.clubsService.addClub(newClub).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le livre a été ajouté avec succès !',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erreur lors de l’ajout du club :',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      this.closeModal();
      this.clubForm.reset(); // Réinitialisation du formulaire
    }
  }
  updateClub() {
    if (this.clubForm.valid) {
      const newClub: ClubDTO = {
        clubId: '',
        ...this.clubForm.value
      };

      // this.clubsService.addClub(newClub).subscribe(
      //   (response) => {
      //     this.clubs.push(response); // Ajouter le club à la liste
      //     this.closeModal();
      //     this.clubForm.reset(); // Réinitialisation du formulaire
      //   },
      //   (error) => {
      //     console.error('Erreur lors de l’ajout du club :', error);
      //   }
      // );
    }
  }

}
