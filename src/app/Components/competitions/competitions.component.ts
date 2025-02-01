import {Component, OnInit} from '@angular/core';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {PlayerService} from '../../Services/player.service';
import {CompetitionsService} from '../../Services/competitions.service';
import {CompetitionsDTO} from '../../Models/CompetitionsDTO';
import {CompetitionDTO} from '../../Models/CompetitionDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-competitions',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})
export class CompetitionsComponent implements  OnInit {
  competitions: CompetitionDTO[] = [];
  searchKeyword = '';
  page = 1;
  totalpage: number = 0;

  constructor(private competitionsService: CompetitionsService,private router: Router) {
  }

  ngOnInit(): void {
    this.loadCompetitions();
    console.log(this.competitions)
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
}
