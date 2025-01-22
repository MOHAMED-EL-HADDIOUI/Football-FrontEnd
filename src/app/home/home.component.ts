import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  videos = [
    { title: 'Ronaldo to stay at Real Madrid?', url: '/assets/img_1.jpg' },
    { title: 'Kai Havertz Double To Secure', url: '/assets/img_2.jpg' },
    { title: 'Dybala set for Juventus return?', url: '/assets/img_3.jpg' },
    { title: 'Match Highlights: LA LEGA vs JUVENDU', url: '/assets/bg_3.jpg' }
  ];
  ngOnInit(): void {
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
