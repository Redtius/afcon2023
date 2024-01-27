import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Matches',
    component: MatchesComponent,
  },
  {
    path: 'stats',
    title: 'Leaderboard',
    component: MatchesComponent,
  },
  {
    path: 'players',
    title: 'Statistiques',
    component: PlayersComponent,
  },
];
