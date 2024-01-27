import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TopStat } from '../players/models/topstats.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playerstable',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTableModule],
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
  }
@Input() topStats: TopStat[];
@Input() displayedColumns: string[];

}
