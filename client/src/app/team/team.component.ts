import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatTabsModule, PlayerCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'] // Note: Corrected property name from 'styleUrl' to 'styleUrls' and should be an array.
})
export class TeamComponent implements OnInit {
  public id: number | null = null;
  public Loading = 0;
  public teamData: any | undefined;
  public players: any[] | undefined;

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id; // Convert string to number
        this.Loading = 0; // Reset loading state
        this.getTeam(this.id);
        this.getPlayers(this.id);
      }
    });
  }

  getTeam(id: number): void {
    this.teamService.getTeam(id).subscribe(team => {
      this.teamData = team.response;
      this.Loading++;
    });
  }

  getPlayers(id: number): void {
    this.teamService.getPlayers(id).subscribe(squad => {
      this.players = squad.response[0].players;
      this.Loading++;
    });
  }
}
