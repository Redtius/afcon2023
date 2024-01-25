import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { Matches } from './matches.model.js';
import { fixtures } from './matches.data.js';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatGridListModule,MatProgressBarModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {
  public isPlaying(status: string): boolean {
    return this.playableStatus.includes(status)
  }
  public extractDate(date: string): string {
    return new Date(date).toLocaleDateString()
  }
private playableStatus: string[] = [
  "HT",
  "1H",
  "2H",
  "ET",
  "P",
  "BT",
  "SUSP",
  "INT",
]

public matches: Matches =fixtures;
}
