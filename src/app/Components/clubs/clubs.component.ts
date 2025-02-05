import {Component, OnInit} from '@angular/core';
import {ClubDTO} from '../../Models/ClubDTO';
import {ClubsService} from '../../Services/clubs.service';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from "@angular/router";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-clubs',
  imports: [
    FormsModule,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
  ],
  standalone: true,
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {
  title = 'Clubs';

  clubs: ClubDTO[] = [];
  searchKeyword = '';
  page = 1;
  totalpage: number = 0;

  constructor(private clubsService: ClubsService,private router: Router,private titleService: Title) {
    this.setTitle(this.title);

  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
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
}
