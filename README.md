# Africa Cup of Nations 2023 Live Statistics App

## Overview
This application provides real-time statistics and updates for the Africa Cup of Nations 2023. Using Angular 17 for the frontend and API-Football for backend data retrieval, it offers users an interactive and up-to-date experience for following the tournament.

<p align=center >
  <img src="https://github.com/user-attachments/assets/ace9bf1e-c8d4-4d2f-a80c-0a95ff3a4501" alt="homepage" border="0" width="600" height="auto"/>
</p>

<p align="center" style="color:gray;">
  Home Page
</p>

<p align=center >
  <img src="https://github.com/user-attachments/assets/beca1858-dd49-4fc7-98a9-406913eb60c1" alt="stats page" border="0" width="600" height="auto"/>
</p>

<p align="center" style="color:gray;">
  Statistics Page
</p>

## Features
- **Live Score Updates:** Real-time scores from all matches.
- **Team Stats:** Detailed statistics for each team participating in the tournament.
- **Team Players:** Information about Team players.
- **Match Schedules:** Up-to-date match schedules, and times.
- **Historical Data:** Access to historical data.
- **Leaderboard:** Access to historical data.

## Technology Stack
- **Frontend:** Angular 17.
- **API:** API-Football for fetching live data.
- **Styling:** Css Tailwind & SCSS.
- **Additional Libraries:** Angular Material.

### Prerequisites
- Node.js
- Angular CLI
- A valid API key for API-Football

### Installation
1. Clone the repo:

```git
git clone [repository link](https://github.com/Redtius/afcon2023)
```

2. Navigate to the project directory:
```bash
cd afcon2023/client
```

3. Install NPM packages:
```bash
npm install
```

4. Enter your API key in `afcon2023/client/src/assets/apiConfig.ts`:
```Typescript
const header = {
// key+host
}
```

### Running the Application
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage
- Navigate through the app to view live match scores, player statistics, and team information.
- Use the search function to find specific teams.


