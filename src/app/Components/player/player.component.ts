import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ClubDTO} from '../../Models/ClubDTO';
import {PlayerDTO} from '../../Models/PlayerDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {ClubsService} from '../../Services/clubs.service';
import {PlayerService} from '../../Services/player.service';
import {TransfersService} from '../../Services/transfers.service';
import {TransferDTO} from '../../Models/TransferDTO';
import {discardPeriodicTasks} from '@angular/core/testing';
import {PlayerValuationsService} from '../../Services/player-valuations.service';
import {PlayerValuationsDTO} from '../../Models/PlayerValuationsDTO';
import {PlayerValuationDTO} from '../../Models/PlayerValuationDTO';

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
  playerValuations:PlayerValuationDTO[]=[];
  pageP = 1;
  totalpageP: number = 0;

  playerId:number=0;
  transfers: TransferDTO[] = [];
  page = 1;
  totalpage: number = 0;
  constructor(private route: ActivatedRoute,private playerValuationsService :PlayerValuationsService,private router :Router,private transfersService:TransfersService,private playerService :PlayerService) {}

  ngOnInit(): void {
    this.playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getClub(this.playerId);
    this.getTransfers(this.playerId,this.page-1);
    this.getplayerValuations(this.playerId,this.pageP-1);
  }
  getClub(playerId: number):void{
    this.playerService.getPlayerById(playerId).subscribe((data) => {
      this.player = data;
    });
  }
  getplayerValuations (playerId: number,page:number):void{
    this.playerValuationsService.getPlayerValuationsByPlayer(playerId,page).subscribe((data) => {
      this.playerValuations = data.playerValuationDTOS;
      this.totalpageP = data.totalpage;
    });
  }
  getTransfers (playerId: number,page:number):void{
    this.transfersService.getTransfersByPlayer(playerId,page).subscribe((data) => {
      this.transfers = data.transferDTOS;
      this.totalpage = data.totalpage;
    });
  }
  navigateToCompetition(id_competition: string) {
    this.router.navigate(['/competitions/', id_competition]);
  }
  navigateToClub(id_club: number) {
    this.router.navigate(['/clubs/', id_club]);
  }
  changePage(d: string): void {
    if (d === 'left') {
      this.page = this.page - 1;
    } else {
      this.page = this.page + 1;
    }
    this.getTransfers(this.playerId,this.page-1);
  }
  changePageP(d: string): void {
    if (d === 'left') {
      this.pageP = this.pageP - 1;
    } else {
      this.pageP = this.pageP + 1;
    }
    this.getplayerValuations(this.playerId,this.pageP-1);
  }
}
