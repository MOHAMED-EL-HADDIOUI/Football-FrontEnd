import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {CompetitionsService} from '../../Services/competitions.service';
import {Router} from '@angular/router';
import {ClubDTO} from '../../Models/ClubDTO';

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
    { id: 'IT', name: 'Italie' }
  ];

  competitionData!:CompetitionDTO;

  isModalOpen = false;
  isModalOpen_ = false;
  competitionForm!: FormGroup;
  constructor(private competitionsService: CompetitionsService,private router: Router,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.competitionForm = this.fb.group({
      competitionCode: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      subType: ['', Validators.required],
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
    this.competitionData=competitionData;
    this.isModalOpen_ = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  closeModal_() {
    this.isModalOpen_ = false;
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

  }

  updateCompetition() {

  }
}
