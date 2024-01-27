import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { HeaderComponent } from './header/header.component';
import { InfoheaderComponent } from './infoheader/infoheader.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FooterComponent, RouterOutlet,MatchesComponent,HeaderComponent,InfoheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

}
