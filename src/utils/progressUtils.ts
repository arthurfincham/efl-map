import { FullClubList } from '../data';

export const updateProgress = (clubsInMap: string[], coords: ICoordinates) => {
  window.localStorage.setItem('efl-map-progress', `${clubsInMap}`);
  window.localStorage.setItem('efl-map-location', JSON.stringify(coords));
};

interface SavedProgress {
  clubs: IFootballClub[] | null;
  position: ICoordinates | null;
}

export const getProgress = (): SavedProgress => {
  let clubs = null;
  let position = null;
  if (window.localStorage.getItem('efl-map-progress')) {
    const progress = window.localStorage.getItem('efl-map-progress').split(',');
    const savedClubs = progress.map((id) => {
      return FullClubList.find((club) => club.id === id);
    });
    clubs = savedClubs;
  }
  if (window.localStorage.getItem('efl-map-location')) {
    const location = JSON.parse(
      window.localStorage.getItem('efl-map-location')
    );
    position = location;
  }
  return {
    clubs,
    position,
  };
};
