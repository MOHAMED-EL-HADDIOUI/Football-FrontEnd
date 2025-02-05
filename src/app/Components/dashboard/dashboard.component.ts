import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {NgForOf} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  standalone:true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  constructor(private titleService: Title,private router:Router) {
    this.setTitle(this.title);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {

  }
  navigateToManagementClubs() {
    this.router.navigate(['/management/clubs']);
  }
  navigateToManagementCompetitions() {
    this.router.navigate(['/management/competitions']);
  }
  navigateToManagementPlayers() {
    this.router.navigate(['/management/players']);
  }
  navigateToManagementMatches() {
    this.router.navigate(['/management/matches']);
  }

}
