import {Component, OnInit} from '@angular/core';
import {ClubsService} from '../../Services/clubs.service';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ClubDTO} from '../../Models/ClubDTO';
import {CurrencyPipe, NgForOf, NgIf, NgStyle} from '@angular/common';
import {PlayerService} from '../../Services/player.service';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-club',
  standalone:true,
  imports: [
    FooterComponent,
    HeaderComponent,
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {
  title = '';

  club!: ClubDTO;
  players: PlayerDTO[] = [];
  page = 1;

  totalpage: number = 0;
  clubId:number=0;


  constructor(private route: ActivatedRoute,private router:Router, private clubService: ClubsService,private playerService :PlayerService,private titleService: Title){}

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.clubId = Number(this.route.snapshot.paramMap.get('id'));
    this.getClub(this.clubId);
    this.getListPlayersByCurrentClub(this.clubId,this.page-1);
  }

  getClub(clubId: number):void{
    this.clubService.getClubById(clubId).subscribe((data) => {
      this.club = data;
      this.setTitle(this.club.name);
    });
}
  getListPlayersByCurrentClub(clubId: number,page :number):void{
    this.playerService.getListPlayersByCurrentClub(clubId, page).subscribe(
      (data) => {
        this.players = data.playerDTOS;
        this.totalpage = data.totalpage; // Assuming the service returns total players count
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );

  }
  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.getListPlayersByCurrentClub(this.clubId,this.page-1);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToPlayer(id_player: number) {
    this.router.navigate(['/players/', id_player]);
  }

}
