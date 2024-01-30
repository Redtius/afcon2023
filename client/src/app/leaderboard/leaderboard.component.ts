import { fixtures } from './../matches/matches.data';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { League, Leaderboard } from './leaderboard.model';
import { leaderboardData } from './leaderboard.data';
import { FinalBoardComponent } from '../final-board/final-board.component';
import { GroupsBoardComponent } from '../groups-board/groups-board.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Matches } from '../matches/matches.model';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatCardModule,GroupsBoardComponent,FinalBoardComponent, MatFormFieldModule,MatSelectModule,FormsModule,ReactiveFormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {
  public selected:FormControl = new FormControl('Groups Phase');
  public FinalData: Matches = fixtures;
}
