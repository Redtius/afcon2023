import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
  },
  {
    path: 'stats',
    component: MatchesComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
];
