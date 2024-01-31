import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LEAGUE, SEASON } from '../players/players.data';
import { baseURL, header } from '../../assets/apiConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

 searchTeam(value:string):Observable<any>{
  const params = new HttpParams()
  .set('search',value);

  const headers =  new HttpHeaders()
  .set('x-rapisapi-host', header.host)
  .set('x-rapidapi-key', header.key);

  return this.http.get(baseURL+'teams', {headers, params});


 }


}
