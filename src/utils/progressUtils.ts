import { FullClubList } from '../data';

export const updateProgress = (
  clubsInMap: string[],
  coords: ICoordinates,
  sortByLeague: boolean
) => {
  window.localStorage.setItem('efl-map-progress', `${clubsInMap}`);
  window.localStorage.setItem('efl-map-location', JSON.stringify(coords));
  window.localStorage.setItem('efl-map-sort-by-league', `${sortByLeague}`);
};

interface SavedProgress {
  clubs: IFootballClub[] | null;
  position: ICoordinates | null;
  sortByLeague: boolean | null;
}

export const getProgress = (): SavedProgress => {
  let clubs = null;
  let position = null;
  let sortByLeague = null;
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
  if (window.localStorage.getItem('efl-map-sort-by-league')) {
    sortByLeague =
      window.localStorage.getItem('efl-map-sort-by-league') === 'true';
  }

  return {
    clubs,
    position,
    sortByLeague,
  };
};

export const clearProgress = () => {
  if (window.confirm('Are you sure you want to start over?')) {
    window.localStorage.removeItem('efl-map-progress');
    window.localStorage.removeItem('efl-map-location');
    window.localStorage.removeItem('efl-map-sort-by-league');
  }
};
