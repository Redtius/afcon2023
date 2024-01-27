import { header,baseURL} from './../../assets/apiConfig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const SEASON = 2024;
const LEAGUE = 6;
const GOALS_URL = 'players/topscorers';
const ASSISTS_URL = 'players/topassists';
const YELLOW_URL = 'players/topyellowcards';
const RED_URL = 'players/topredcards';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http:HttpClient) {}

  getGoals():Observable<any> {
    const params = new HttpParams()
    .set('season',SEASON)
    .set('league',LEAGUE);

    const headers = new HttpHeaders({
      'x-rapidapi-host':header.host,
      'x-rapidapi-key':header.key
    })

    return this.http.get(baseURL+GOALS_URL,{params,headers});
  }


}
