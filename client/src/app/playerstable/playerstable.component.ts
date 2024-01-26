import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TopStat } from '../players/models/topstats.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const ELEMENT_DATA:TopStat[] = [
  {
    player:{
      player_id: 1,
      player_name : "Luis Suarez",
      country: "Uruguay"
    },
    stat: 1,
  },
  {
    player:{
      player_id: 2,
      player_name : "Lionel Messi",
      country: "Argentina"
    },
    stat: 2,
  },
  {
    player:{
      player_id: 3,
      player_name : "Cristiano Ronaldo",
      country: "Portugal"
    },
    stat: 3,
  },
  {
    player:{
      player_id: 4,
      player_name : "Neymar",
      country: "Brazil"
    },
    stat: 4,
  },
  {
    player:{
      player_id: 5,
      player_name : "Robert Lewandowski",
      country: "Poland"
    },
    stat: 5,
  },
  {
    player:{
      player_id: 6,
      player_name : "Kylian Mbappe",
      country: "France"
    },
    stat: 6,
  },
  {
    player:{
      player_id: 7,
      player_name : "Sergio Aguero",
      country: "Argentina"
    },
    stat: 7,
  },
  {
    player:{
      player_id: 8,
      player_name : "Karim Benzema",
      country: "France"
    },
    stat: 8,
  },
  {
    player:{
      player_id: 9,
      player_name : "Harry Kane",
      country: "England"
    },
    stat: 9,
  },
  {
    player:{
      player_id: 10,
      player_name : "Edinson Cavani",
      country: "Uruguay"
    },
    stat: 10,
  },
  {
    player: {
      player_id: 11,
      player_name: "Luis Suarez",
      country: "Uruguay"
    },
    stat: 11,
  },
  {
    player: {
      player_id: 12,
      player_name: "Lionel Messi",
      country: "Argentina"
    },
    stat: 12,
  },
  {
    player: {
      player_id: 13,
      player_name: "Cristiano Ronaldo",
      country: "Portugal"
    },
    stat: 13,
  },
  {
    player: {
      player_id: 14,
      player_name: "Neymar",
      country: "Brazil"
    },
    stat: 14,
  },

];

@Component({
  selector: 'app-playerstable',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTableModule],
  templateUrl: './playerstable.component.html',
  styleUrl: './playerstable.component.scss'
})
export class PlayerstableComponent {
displayedColumns: string[] = ['player', 'stat'];
stat_type:string = "Assits";
dataSource = ELEMENT_DATA;
}
