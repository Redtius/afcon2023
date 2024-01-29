import { baseURL } from './../../assets/apiConfig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LEAGUE, SEASON } from '../players/players.data';
import { header } from '../../assets/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) {
  }

  public getTeam(id:number):Observable<any>{
    const params = new HttpParams()
    .set('team',id)
    .set('season',SEASON)
    .set('league',LEAGUE);

    const headers = new HttpHeaders()
    .set('x-rapidapi-host', header.host)
    .set('x-rapidapi-key', header.key);



    return this.http.get(baseURL+'teams/statistics', {params,headers});
  }

  public getPlayers(id:number):Observable<any>{
    const params = new HttpParams()
    .set('team',id)

    const headers = new HttpHeaders()
    .set('x-rapidapi-host', header.host)
    .set('x-rapidapi-key', header.key);

    return this.http.get(baseURL+'players/squads', {params,headers});
  }
}
