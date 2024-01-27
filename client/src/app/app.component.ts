import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { HeaderComponent } from './header/header.component';
import { InfoheaderComponent } from './infoheader/infoheader.component';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatchesComponent,HeaderComponent,InfoheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  
}
