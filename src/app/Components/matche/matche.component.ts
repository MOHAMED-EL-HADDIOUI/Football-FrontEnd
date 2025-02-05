import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {MatcheService} from '../../Services/matche.service';
import {GameDTO} from '../../Models/GameDTO';
import {ClubGameDTO} from '../../Models/ClubGameDTO';
import {ClubGamesService} from '../../Services/club-games.service';
import {GameEventDTO} from '../../Models/GameEventDTO';
import {GameEventsService} from '../../Services/game-events.service';
import {GameLineupDTO} from '../../Models/GameLineupDTO';
import {GameLineupsService} from '../../Services/game-lineups.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-matche',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf,
    DecimalPipe,
    DatePipe,
    NgClass,
    NgForOf,
    NgSwitch,
    NgSwitchCase
  ],
  standalone:true,
  templateUrl: './matche.component.html',
  styleUrl: './matche.component.css'
})
export class MatcheComponent implements OnInit{
  game!: GameDTO;
  gameEvents:GameEventDTO[]=[];
  gameLineups:GameLineupDTO[]=[];
  clubgames :ClubGameDTO[]=[];
  title = '';
  pagel = 1;
  totalpagel: number = 0;

  page = 1;
  totalpage: number = 0;
  gameId:number=0;


  constructor(private route: ActivatedRoute,private router:Router,private gameLineupsService:GameLineupsService,private gameEventsService:GameEventsService,private clubGamesService:ClubGamesService,private matcheService:MatcheService,private titleService: Title) {}
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.getGame(this.gameId);
    this.getclubgames(this.gameId,0);
    this.getgameEvents(this.gameId,this.page-1);
    this.getgameLineups(this.gameId,this.pagel-1);
  }

  getGame(gameId: number):void{
    this.matcheService.getGameById(gameId).subscribe((data) => {
      this.game = data;
      this.setTitle(`${this.game.homeClub.clubCode} VS ${this.game.awayClub.clubCode}`);
    });
  }
  getclubgames (gameId: number,page:number):void{
    this.clubGamesService.getClubGamesByGame(gameId,page).subscribe((data) => {
      this.clubgames = data.clubGameDTOS;
    });
  }
  getgameEvents (gameId: number,page:number):void{
    this.gameEventsService.getGameEventsByGame(gameId,page).subscribe((data) => {
      this.gameEvents = data.gameEventDTOS;
      this.totalpage = data.totalpage;
    });
  }
  getgameLineups (gameId: number,page:number):void{
    this.gameLineupsService.getGameLineupsByGame(gameId,page).subscribe((data) => {
      this.gameLineups = data.gameLineupDTOS;
      this.totalpagel = data.totalpage;
    });
  }

  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.getgameEvents(this.gameId,this.page-1);
  }
  changePagel(d: string): void {
    if (d === 'left') {
      this.pagel = this.pagel - 1;
    } else {
      this.pagel = this.pagel + 1;
    }
    this.getgameLineups(this.gameId,this.pagel-1);
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToPlayer(id_player: number) {
    this.router.navigate(['/players/', id_player]);
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }

}
