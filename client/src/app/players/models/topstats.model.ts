export interface TopStat {
  player:{
    player_id: number;
    player_name : string;
    image: string;
    country: string;
    country_image: string;
  },
  stat: number;
}

export interface AllTopStats{
  goals: TopStat[];
  assists: TopStat[];
  redCards: TopStat[];
  yellowCards: TopStat[];
}
