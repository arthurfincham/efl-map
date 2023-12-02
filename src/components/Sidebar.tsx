import LeagueGroup from './LeagueGroup';

interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-[320px] bg-gray-100 relative">
      <svg className="absolute w-full h-full" fill="none">
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              className="z-0 stroke-gray-300"
              d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"
            ></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
      <div className="flex flex-col items-end justify-center h-[120px] p-4 w-full relative z-1 pr-[15px] pb-0">
        <h1 className="mb-2 text-4xl font-bold">EFL 23/24</h1>
        <div className="flex w-full border border-gray-300 h-[40px] bg-white justify-end items-center rounded-lg  px-3  text-right text-sm font-medium text-gray-500  my-1 relative overflow-hidden ml-4">
          <div
            className="absolute left-0 z-0 h-full bg-purple-200"
            style={{ width: `${(clubsInMap.length / 92) * 100}%` }}
          />
          {92 - clubsInMap.length} / 92
        </div>
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full py-4 relative z-1 pr-[15px] p-4 ">
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
