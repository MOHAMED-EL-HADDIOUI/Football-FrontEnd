import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management-competitions',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone:true,

  templateUrl: './management-competitions.component.html',
  styleUrl: './management-competitions.component.css'
})
export class ManagementCompetitionsComponent implements OnInit{
  competitions: CompetitionDTO[] = [];
  searchKeyword = '';
  page = 1;
  totalpage: number = 0;
  countries = [
    { id: 'FR', name: 'France' },
    { id: 'ES', name: 'Espagne' },
    { id: 'DE', name: 'Allemagne' },
    { id: 'IT', name: 'Italie' },
    { id: 'MA', name: 'Maroc' }

  ];

  isModalOpen = false;
  isModalOpen_ = false;
  competitionForm!: FormGroup;
  constructor(private competitionsService: CompetitionsService,private router: Router,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.competitionForm = this.fb.group({
      competitionId:['', Validators.required],
      competitionCode: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      subType: ['', Validators.required],
      countryName:['', Validators.required],
      confederation: ['', Validators.required],
      countryId: ['', Validators.required],
      domesticLeagueCode: ['', Validators.required],
      isMajorNationalLeague: [false, Validators.required],
      url: ['', Validators.required]
    });
    this.loadCompetitions();
  }

  loadCompetitions(): void {
    this.competitionsService.getCompetitions(this.searchKeyword, this.page-1).subscribe(
      (data) => {
        this.competitions = data.competitionDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total Competitions count
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
  openModal() {
    this.isModalOpen = true;
  }
  openModal_(competitionData:CompetitionDTO) {
    this.competitionForm = this.fb.group({
      competitionId:competitionData.competitionId,
      competitionCode: competitionData.competitionCode,
      name: competitionData.name,
      type: competitionData.type,
      subType: competitionData.subType,
      countryName:competitionData.countryName,
      confederation: competitionData.confederation,
      countryId: competitionData.countryId,
      domesticLeagueCode: competitionData.domesticLeagueCode,
      isMajorNationalLeague: competitionData.isMajorNationalLeague,
      url: competitionData.url
    });
    this.isModalOpen_ = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.competitionForm.reset();
  }
  closeModal_() {
    this.isModalOpen_ = false;
    this.competitionForm.reset();
  }

  searchCompetitions(): void {
    this.page = 1;
    this.loadCompetitions();
  }

  changePage(d: string): void {
    console.log("this.totalPages " + this.totalpage)
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadCompetitions();
  }

  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }

  addCompetition() {
    if (this.competitionForm.valid) {
      const newCompetition: CompetitionDTO = {
        ...this.competitionForm.value
      };
      this.competitionsService.addCompetition(newCompetition).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le Competition a été ajouté avec succès !',
            showConfirmButton: true,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erreur lors de l’ajout du Competition :',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      this.closeModal();
      this.competitionForm.reset();
    }
  }

  updateCompetition(){
    if (this.competitionForm.valid) {
      const updateCompetition: CompetitionDTO = {
        ...this.competitionForm.value
      };
      this.competitionsService.updateCompetition(updateCompetition).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le Competition a été modifié avec succès !',
            showConfirmButton: true,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erreur lors de l’modifier du Competition :',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
      this.closeModal_();
      this.competitionForm.reset();
    }
  }
  deleteCompetition(competition:CompetitionDTO):void{
    this.competitionsService.deleteCompetitionById(competition.competitionId).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Le competition a été supprimé avec succès !',
          showConfirmButton: true,
          timer: 1500
        });
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Erreur lors de l’supprime du competition :',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
