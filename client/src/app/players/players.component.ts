import { Component, OnInit } from '@angular/core';
import { PlayerstableComponent } from '../playerstable/playerstable.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { PlayersService } from './players.service';
import { AllTopStats, TopStat } from './models/topstats.model';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [PlayerstableComponent, MatGridListModule,CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent implements OnInit {
  stats: AllTopStats = {
    goals: [],
    assists: [],
    redCards: [],
    yellowCards: []
  };
  columns: string[][] = [];
  loading = false;
  constructor(private playerService:PlayersService){}

  ngOnInit(): void {
    this.loading=true;
    this.getGoals();
  }

  getGoals(){
    this.playerService.getGoals().subscribe((data)=>{
      console.log(data);
      data.response.forEach((item:any)=>{
        this.stats.goals.push({
          player:{
            player_id: item.player.player_id,
            player_name: item.player.name,
            image: item.player.photo,
            country: item.player.nationality,
            country_image: 'https://cdn.countryflags.com/thumbs/'+item.player.nationality+'/flag-square-250.png'
          },
          stat: item.statistics[0].goals.total,
        });
      });

      this.loading=false;

    },
    );
  }
}
