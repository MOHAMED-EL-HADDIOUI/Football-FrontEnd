import { Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {PlayersComponent} from './Components/players/players.component';
import {MatchesComponent} from './Components/matches/matches.component';
import {CompetitionsComponent} from './Components/competitions/competitions.component';
import {ClubsComponent} from './Components/clubs/clubs.component';
import {ClubComponent} from './Components/club/club.component';
import {CompetitionComponent} from './Components/competition/competition.component';
import {PlayerComponent} from './Components/player/player.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'players', component: PlayersComponent, pathMatch :'full'},
  { path:'matches', component: MatchesComponent, pathMatch :'full'},
  { path:'competitions', component: CompetitionsComponent, pathMatch :'full'},
  { path:'clubs', component: ClubsComponent, pathMatch :'full'},
  { path:'clubs/:id', component: ClubComponent, pathMatch :'full'},
  { path:'competitions/:id', component: CompetitionComponent, pathMatch :'full'},
  { path:'players/:id', component: PlayerComponent, pathMatch :'full'}

];
