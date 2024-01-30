import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { GroupsService } from './groups.service';
import { GroupCardComponent } from '../group-card/group-card.component';

const ELEMENT_DATA: any[] = [
  [
  {
    rank:1,
    team:{
      id:1521,
      name:"Equatorial Guinea",
      logo:"https://media.api-sports.io/football/teams/1521.png"
    },
    points:7,
    goalsDiff:6,
    group:"Group A",
    form:"WWD",
    status:"same",
    description:"Promotion - Africa Cup of Nations (Play Offs: )",
    all:{
      played:3,
      win:2,
      draw:1,
      lose:0,
      goals:{
        for:9,
        against:3
      }
    },
    home:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    away:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    update:"2024-01-30T00:00:00+00:00",
  },
  {
    rank:2,
    team:{
      id:1517,
      name:"Tanzania",
      logo:"https://media.api-sports.io/football/teams/1517.png"
    },
    points:6,
    goalsDiff:1,
    group:"Group A",
    form:"WDL",
    status:"same",
    description:"Promotion - Africa Cup of Nations (Play Offs: )",
    all:{
      played:3,
      win:2,
      draw:0,
      lose:1,
      goals:{
        for:5,
        against:4
      }
    },
    home:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    away:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    update:"2024-01-30T00:00:00+00:00",
  },
  {
    rank:3,
    team:{
      id:1519,
      name:"Libya",
      logo:"https://media.api-sports.io/football/teams/1519.png"
    },
    points:3,
    goalsDiff:-1,
    group:"Group A",
    form:"LWD",
    status:"same",
    description:"Promotion - Africa Cup of Nations (Play Offs: )",
    all:{
      played:3,
      win:1,
      draw:0,
      lose:2,
      goals:{
        for:4,
        against:5
      }
    },
    home:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    away:{
      played:null,
      win:null,
      draw:null,
      lose:null,
      goals:{
        for:null,
        against:null
      }
    },
    update:"2024-01-30T00:00:00+00:00",
  },
],
];

@Component({
  selector: 'app-groups-board',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, FormsModule,MatTableModule,GroupCardComponent],
  templateUrl: './groups-board.component.html',
  styleUrl: './groups-board.component.scss'
})
export class GroupsBoardComponent implements OnInit{

  constructor(private groupsService:GroupsService) { }
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data: any) => {
      this.dataSource= new MatTableDataSource(data.response[0].league.standings);
      console.log(this.dataSource.data);
    });
  }


}
