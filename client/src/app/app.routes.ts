import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Matches',
    component: MatchesComponent,
  },
  {
    path: 'leaderboard',
    title: 'Leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'players',
    title: 'Statistiques',
    component: PlayersComponent,
  },
];
