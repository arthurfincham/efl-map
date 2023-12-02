export const getIcon = (title: string) => {
  switch (title) {
    case 'Premier League':
      return '/PremierLeague.svg';
    case 'Championship':
      return '/Championship.svg';
    case 'League One':
      return '/LeagueOne.svg';
    default:
      return '/LeagueTwo.svg';
  }
};
