import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LEAGUE, SEASON } from '../players/players.data';
import { baseURL, header } from '../../assets/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }

  getGroups() {
    const params = new HttpParams()
    .set('league',LEAGUE)
    .set('season',SEASON);

    const headers =  new HttpHeaders()
    .set('x-rapisapi-host', header.host)
    .set('x-rapidapi-key', header.key);

    return this.http.get(baseURL+'standings', {params, headers});

  }
}
