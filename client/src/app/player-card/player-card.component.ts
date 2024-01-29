import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Player } from './player.model';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule,MatDividerModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  @Input() player: any | undefined;

}
