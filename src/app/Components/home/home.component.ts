import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {Title} from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NgForOf,
    HeaderComponent,
    FooterComponent
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Home';


  videos = [
    { title: 'Ronaldo to stay at Real Madrid?', url: '/assets/img_1.jpg' },
    { title: 'Kai Havertz Double To Secure', url: '/assets/img_2.jpg' },
    { title: 'Dybala set for Juventus return?', url: '/assets/img_3.jpg' },
    { title: 'Match Highlights: LA LEGA vs JUVENDU', url: '/assets/bg_3.jpg' }
  ];
  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
  }


}
