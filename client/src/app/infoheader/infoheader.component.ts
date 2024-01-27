import { Component,Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-infoheader',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './infoheader.component.html',
  styleUrl: './infoheader.component.scss'
})
export class InfoheaderComponent {
  @Input() title: string|undefined;

}
