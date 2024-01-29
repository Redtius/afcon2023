import { Component, Input } from '@angular/core';
import { Matches } from '../matches/matches.model';
import { fixtures } from '../matches/matches.data';

@Component({
  selector: 'app-final-board',
  standalone: true,
  imports: [],
  templateUrl: './final-board.component.html',
  styleUrl: './final-board.component.scss'
})
export class FinalBoardComponent {
  @Input() public data: Matches | undefined ;
}
