import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { RouterLink, RouterLinkActive,Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,CommonModule,MatIconModule,FormsModule,MatButtonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router){}
  private isStats:boolean = false;
  private isHome:boolean = false;
  private isPlayers:boolean = false;
  public getIsStats():boolean{  return this.isStats; }
  public getIsHome():boolean{ return this.isHome; }
  public getIsPlayers():boolean{ return this.isPlayers; }

  ngOnInit() {
    this.updateActiveRoute(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveRoute(event.url);
      }
    });
  }

  private updateActiveRoute(url: string) {
    this.isHome = url === '/';
    this.isStats = url === '/stats';
    this.isPlayers = url === '/players';
  }

  }
