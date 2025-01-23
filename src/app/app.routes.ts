import { Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {PlayersComponent} from './Components/players/players.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'players', component: PlayersComponent, pathMatch :'full'}
];
