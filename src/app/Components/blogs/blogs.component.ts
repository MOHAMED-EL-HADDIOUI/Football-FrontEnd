import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  ngOnInit(): void {
  }

}
