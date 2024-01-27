import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  dataSource: MatTableDataSource<TopStat>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set topStats(value: TopStat[]) {
    this.dataSource = new MatTableDataSource<TopStat>(value);
  }
  @Input() displayedColumns: string[];

  @Input() title: string = 'Players Stats';

  constructor() {
    this.displayedColumns = [];
    this.dataSource = new MatTableDataSource<TopStat>([]);
  }

  ngOnInit(): void {
    this.displayedColumns = ['player', 'stat'];
    console.log(this.dataSource);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
