import LeagueGroup from './LeagueGroup';

interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-[320px] bg-gray-100 pr-[15px] p-4">
      <div className="flex flex-col items-end justify-center h-[100px] px-3 w-full ">
        <h1 className="text-4xl font-bold">92 Clubs</h1>
        <h1 className="text-lg font-bold">
          {92 - clubsInMap.length} remaining
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full py-4">
        <LeagueGroup
          title="Premier League"
          clubs={clubsInMap.filter((club) => club.league === 'Premier League')}
          panToClub={panToClub}
        />
        <LeagueGroup
          title="Championship"
          clubs={clubsInMap.filter(
            (club) => club.league === 'EFL Championship'
          )}
          panToClub={panToClub}
        />
        <LeagueGroup
          title="League One"
          clubs={clubsInMap.filter((club) => club.league === 'EFL League One')}
          panToClub={panToClub}
        />
        <LeagueGroup
          title="League Two"
          clubs={clubsInMap.filter((club) => club.league === 'EFL League Two')}
          panToClub={panToClub}
        />
      </div>
    </div>
  );
}
