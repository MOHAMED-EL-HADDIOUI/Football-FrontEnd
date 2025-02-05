import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {NgForOf} from '@angular/common';
import {Title} from '@angular/platform-browser';

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
  title = 'Blogs';

  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
  }

}
