import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';

export const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
  },
  {
    path: 'stats',
    component: MatchesComponent,
  },
];
