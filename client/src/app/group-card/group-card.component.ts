import { DataSource } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule,MatTableModule],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss'
})
export class GroupCardComponent implements OnInit{
  displayedColumns: string[] = ['Rank', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Form'];
  @Input() group: any;

  dataSource:MatTableDataSource<any> = new MatTableDataSource();

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.group);
  }

}
