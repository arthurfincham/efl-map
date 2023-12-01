/// <reference types="vite/client" />

export {};

declare global {
  interface IFootballClub {
    club: string;
    clubLabel: string;
    venue: string;
    venueLabel: string;
    coordinates: string;
    league: string;
    leagueLabel: string;
    article: string;
    badgeLink: string;
  }
}
