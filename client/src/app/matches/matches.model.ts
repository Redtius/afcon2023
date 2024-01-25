export interface Matches {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}
interface Parameters {
  live: string;
}

interface Paging {
  current: number;
  total: number;
}

interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Teams {
  home: Home;
  away: Away;
}

interface Home {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Away {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Goals {
  home: number|null;
  away: number|null;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Fixture {
  id: number;
  referee: string|null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface Periods {
  first: number|null;
  second: number|null;
}

interface Status {
  long: string;
  short: string;
  elapsed: number|null;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}
