import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ClubDTO} from '../../Models/ClubDTO';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {ActivatedRoute} from '@angular/router';
import {ClubsService} from '../../Services/clubs.service';
import {PlayerService} from '../../Services/player.service';

@Component({
  selector: 'app-player',
  imports: [
    CurrencyPipe,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    DatePipe
  ],
  standalone :true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit{
  player!: PlayerDTO;
  playerId:number=0;
  constructor(private route: ActivatedRoute,private playerService :PlayerService) {}

  ngOnInit(): void {
    this.playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getClub(this.playerId);
  }
  getClub(playerId: number):void{
    this.playerService.getPlayerById(playerId).subscribe((data) => {
      this.player = data;
    });
  }
}
