import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {NgForOf} from '@angular/common';

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
  ngOnInit(): void {

  }

}
