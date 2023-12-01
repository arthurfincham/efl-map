/// <reference types="vite/client" />

export {};

declare global {
  interface IFootballClub {
    uuid: string;
    name: string;
    alternativeNames: string[];
    nameWikiId: string;
    stadium: string;
    stadiumCoords: {
      lat: number;
      lng: number;
    };
    stadiumWikiId: string;
    league: string;
    leagueWikiId: string;
    badgeLink: string;
    wikiArticle: string;
  }

  interface ICoordinates {
    lat: number;
    lng: number;
  }
}
