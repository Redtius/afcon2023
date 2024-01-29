import { Component, HostListener, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { RouterLink, RouterLinkActive,Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoheaderComponent } from '../infoheader/infoheader.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatTooltipModule,CommonModule,MatIconModule,FormsModule,MatButtonModule,RouterLink,RouterLinkActive,InfoheaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router){}
  private isStats:boolean = false;
  private isHome:boolean = false;
  private isPlayers:boolean = false;
  public isTeam:boolean = false;
  public getIsStats():boolean{  return this.isStats; }
  public getIsHome():boolean{ return this.isHome; }
  public getIsPlayers():boolean{ return this.isPlayers; }

  public scrolledDown:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 0) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }

  ngOnInit() {
    this.updateActiveRoute(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveRoute(event.url);
      }
    });
  }

  getTitle():string|undefined{
    if(this.isHome){
      return "Matches";
    }else if(this.isStats){
      return "Leaderboard";
    }else if(this.isPlayers){
      return "Statistiques";
    }
    else if(this.isTeam){
      return "Team Statistiques";
    }
    return undefined;
  }

  private updateActiveRoute(url: string) {
    this.isHome = url === '/';
    this.isStats = url === '/leaderboard';
    this.isPlayers = url === '/players';
    this.isTeam = url.includes('/team/');
  }

  }
