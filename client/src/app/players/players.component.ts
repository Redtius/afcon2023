import { Component } from '@angular/core';
import { PlayerstableComponent } from '../playerstable/playerstable.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [PlayerstableComponent, MatGridListModule,CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
 data = [1,2,3,4,5];
}
