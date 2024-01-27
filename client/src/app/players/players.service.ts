import { header,baseURL} from './../../assets/apiConfig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SEASON,LEAGUE } from './players.data';



@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http:HttpClient) {}

  getStat(url:string):Observable<any> {
    const params = new HttpParams()
    .set('season',SEASON)
    .set('league',LEAGUE);

    const headers = new HttpHeaders({
      'x-rapidapi-host':header.host,
      'x-rapidapi-key':header.key
    })

    return this.http.get(baseURL+url,{params,headers});
  }



}
