import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { Player } from '../player-card/player.model';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './team.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatProgressSpinnerModule,MatTabsModule,PlayerCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit{
  public id: number = 0;
  public Loading: number = 0;
  public teamData: any|undefined;

  constructor(activatedRoute:ActivatedRoute, private teamService:TeamService) {
    activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getTeam(this.id);
    this.getPlayers(this.id);
  }

  getTeam(id:number):void{
    this.teamService.getTeam(id).subscribe((team) => {
      this.teamData = team.response;
      console.log(this.teamData);
      this.Loading++;
    });
  }

  getPlayers(id:number):void{
    this.teamService.getPlayers(id).subscribe((squad) => {
      this.players = squad.response[0].players;
      console.log(this.players);
      this.Loading++;
    });
  }
public players: any[] |undefined;


}
