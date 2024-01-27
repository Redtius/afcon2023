import { Component, OnInit } from '@angular/core';
import { PlayerstableComponent } from '../playerstable/playerstable.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { PlayersService } from './players.service';
import { AllTopStats, TopStat } from './models/topstats.model';
import { GOALS_URL,ASSISTS_URL,RED_URL,YELLOW_URL } from './players.data';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [PlayerstableComponent, MatGridListModule,CommonModule,MatProgressSpinnerModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent implements OnInit {
  stats: AllTopStats = {
    goals:[],
    assists:[],
    yellowCards:[],
    redCards:[],
  };
  Loading: number = 0;
  constructor(private playerService:PlayersService){}

  ngOnInit(): void {
    this.getGoals();
    this.getAssists();
    this.getYellowCards();
    this.getRedCards();
  }

  getGoals(){
    this.playerService.getStat(GOALS_URL).subscribe((data)=>{
      data.response.forEach((item:any)=>{
        this.stats.goals.push({
          player:{
            player_id: item.player.id,
            player_name: item.player.name,
            image: item.player.photo,
            country: item.player.nationality,
            country_image: item.statistics[0].team.logo,
          },
          stat: item.statistics[0].goals.total,
        });

      });
      this.Loading++;
    },
    );
  }

  getAssists(){
    this.playerService.getStat(ASSISTS_URL).subscribe((data)=>{
      data.response.forEach((item:any)=>{
        this.stats.assists.push({
          player:{
            player_id: item.player.player_id,
            player_name: item.player.name,
            image: item.player.photo,
            country: item.player.nationality,
            country_image: item.statistics[0].team.logo,
          },
          stat: item.statistics[0].goals.assists,
        });
      });
      this.Loading++;
    },
    );
  }

  getYellowCards(){
    this.playerService.getStat(YELLOW_URL).subscribe((data)=>{
      data.response.forEach((item:any)=>{
        this.stats.yellowCards.push({
          player:{
            player_id: item.player.player_id,
            player_name: item.player.name,
            image: item.player.photo,
            country: item.player.nationality,
            country_image: item.statistics[0].team.logo,
          },
          stat: item.statistics[0].cards.yellow,
        });
      });
      this.Loading++;
    },
    );
  }

  getRedCards(){
    this.playerService.getStat(RED_URL).subscribe((data)=>{
      data.response.forEach((item:any)=>{
        this.stats.redCards.push({
          player:{
            player_id: item.player.player_id,
            player_name: item.player.name,
            image: item.player.photo,
            country: item.player.nationality,
            country_image: item.statistics[0].team.logo,
          },
          stat: item.statistics[0].cards.red,
        });
      });
      this.Loading++;
    },
    );
  }

}
