import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClubDTO} from '../../Models/ClubDTO';
import {ClubsService} from '../../Services/clubs.service';
import {Router} from '@angular/router';

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

  constructor(private clubsService: ClubsService,private router: Router) {
  }

  ngOnInit(): void {
    this.loadClubs();
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

  searchClubs(): void {
    this.page = 1;
    this.loadClubs();
  }

  changePage(d: string): void {
    console.log("this.totalPages " + this.totalpage)
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.loadClubs();
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }

}
