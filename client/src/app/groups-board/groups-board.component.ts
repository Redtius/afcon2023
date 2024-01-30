import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { GroupsService } from './groups.service';
import { GroupCardComponent } from '../group-card/group-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-groups-board',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, FormsModule,MatTableModule,GroupCardComponent,MatProgressSpinnerModule],
  templateUrl: './groups-board.component.html',
  styleUrl: './groups-board.component.scss'
})
export class GroupsBoardComponent implements OnInit{
  Loading:boolean=true;

  constructor(private groupsService:GroupsService) { }
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data: any) => {
      this.dataSource= new MatTableDataSource(data.response[0].league.standings);
      this.Loading=false;
    });
  }


}
