export interface Leaderboard {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: LeaderboardResponse[];
}

export interface LeaderboardResponse {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  flag: string|null;
  logo: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string|null;
  all: All;
  home: Home;
  away: Away;
  update: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface All {
  played: number|null;
  win: number|null;
  draw: number|null;
  lose: number|null;
  goals: Goals;
}

export interface Home {
  played: number|null;
  win: number|null;
  draw: number|null;
  lose: number|null;
  goals: Goals;
}

export interface Away {
  played: number|null;
  win: number|null;
  draw: number|null;
  lose: number|null;
  goals: Goals|null;
}

export interface Goals {
  for: number|null;
  against: number|null;
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
}

