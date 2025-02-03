import { Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {PlayersComponent} from './Components/players/players.component';
import {MatchesComponent} from './Components/matches/matches.component';
import {CompetitionsComponent} from './Components/competitions/competitions.component';
import {ClubsComponent} from './Components/clubs/clubs.component';
import {ClubComponent} from './Components/club/club.component';
import {CompetitionComponent} from './Components/competition/competition.component';
import {PlayerComponent} from './Components/player/player.component';
import {MatcheComponent} from './Components/matche/matche.component';
import {BlogsComponent} from './Components/blogs/blogs.component';
import {ContactComponent} from './Components/contact/contact.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {ManagementMatchesComponent} from './Components/management-matches/management-matches.component';
import {ManagementCompetitionsComponent} from './Components/management-competitions/management-competitions.component';
import {ManagementClubsComponent} from './Components/management-clubs/management-clubs.component';
import {ManagementPlayersComponent} from './Components/management-players/management-players.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'players', component: PlayersComponent, pathMatch :'full'},
  { path:'matches', component: MatchesComponent, pathMatch :'full'},
  { path:'competitions', component: CompetitionsComponent, pathMatch :'full'},
  { path:'clubs', component: ClubsComponent, pathMatch :'full'},
  { path:'clubs/:id', component: ClubComponent, pathMatch :'full'},
  { path:'competitions/:id', component: CompetitionComponent, pathMatch :'full'},
  { path:'players/:id', component: PlayerComponent, pathMatch :'full'},
  { path:'matches/:id', component: MatcheComponent, pathMatch :'full'},
  { path:'blogs', component: BlogsComponent, pathMatch :'full'},
  { path:'contact', component: ContactComponent, pathMatch :'full'},
  { path:'dashboard', component: DashboardComponent, pathMatch :'full'},
  { path:'management/matches', component: ManagementMatchesComponent, pathMatch :'full'},
  { path:'management/players', component: ManagementPlayersComponent, pathMatch :'full'},
  { path:'management/clubs', component: ManagementClubsComponent, pathMatch :'full'},
  { path:'management/competitions', component: ManagementCompetitionsComponent, pathMatch :'full'}


];
