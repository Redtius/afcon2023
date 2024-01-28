import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { baseURL,header } from '../../assets/apiConfig';
import { Observable } from 'rxjs';
import { LEAGUE,SEASON } from '../players/players.data';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private currentDate:Date = new Date();
  private twoDaysAgo:Date;
  private afterWeek:Date;

  constructor(private http:HttpClient) {
    this.twoDaysAgo = new Date(this.currentDate);
    this.twoDaysAgo.setDate(this.twoDaysAgo.getDate()-2);

    this.afterWeek = new Date(this.currentDate);
    this.afterWeek.setDate(this.afterWeek.getDate()+7);
  }

  getRecentMatches():Observable<any>{
    const params= new HttpParams()
    .set('from',this.twoDaysAgo.toISOString().split('T')[0])
    .set('to',this.afterWeek.toISOString().split('T')[0])
    .set('league',LEAGUE)
    .set('season',SEASON);

    const headers = new HttpHeaders()
    .set('x-rapidapi-host', header.host)
    .set('x-rapidapi-key', header.key);


    return this.http.get(baseURL+'fixtures', {params,headers});
  }


}
