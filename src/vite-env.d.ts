/// <reference types="vite/client" />

export {};

declare global {
  interface IFootballClub {
    id: string;
    name: string;
    stadium: string;
    league: string;
    alternativeNames: string[];
    coords: {
      lat: number;
      lng: number;
    };
    badgeLink: string;
    wikiId: {
      stadium: string;
      club: string;
      league: string;
      articlePath: string;
    };
  }

  interface ICoordinates {
    lat: number;
    lng: number;
  }
}
