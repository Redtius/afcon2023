import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule ,MatTableDataSource} from '@angular/material/table';
import { TopStat } from '../players/models/topstats.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { InfoheaderComponent } from '../infoheader/infoheader.component';

@Component({
  selector: 'app-playerstable',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTableModule,MatPaginatorModule],
  templateUrl: './playerstable.component.html',
  styleUrl: './playerstable.component.scss'
})
export class PlayerstableComponent implements OnInit{
  constructor() {
    this.topStats = [];
    this.displayedColumns = [];
  }
  ngOnInit(): void {
    this.displayedColumns = ['player', 'stat'];
    console.log(this.topStats)
  }
@Input() topStats: TopStat[];
@Input() displayedColumns: string[];

}
