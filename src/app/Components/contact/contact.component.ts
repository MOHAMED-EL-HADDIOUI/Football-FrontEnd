import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
  }

}
