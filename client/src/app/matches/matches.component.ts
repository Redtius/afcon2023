import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { Matches } from './matches.model.js';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatchesService } from './matches.service.js';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [RouterModule,MatCardModule,MatProgressSpinnerModule,CommonModule,MatGridListModule,MatProgressBarModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent implements OnInit {
  public Loading:boolean = true;
  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.getMatches();
  }

  public getMatches(): void {
    this.matchesService.getRecentMatches().subscribe((matches) => {
      this.matches = matches;
      this.Loading = false;
    });
  }

  public isPlaying(status: string): boolean {
    return this.playableStatus.includes(status)
  }

  public isPlayed(status: string): boolean {
    return !this.playedStatus.includes(status)
  }

  public extractDate(date: string): string {
    return new Date(date).toLocaleDateString()
  }
  public extractTime(date: string): string {
    return new Date(date).toLocaleTimeString().slice(0, 5);
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

private playedStatus: string[] = [
  "FT",
  "AET",
  "PEN",
  "PST",
  "CANC",
  "ABD",
  "AWD",
  "WO",
]

public matches: Matches|undefined;
}
