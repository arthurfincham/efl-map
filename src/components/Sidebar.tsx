import { useState } from 'react';
import { clearProgress } from '../utils/progressUtils';
import LeagueGroup from './LeagueGroup';
import {
  ClearProgressButton,
  SidebarBackground,
  SidebarLiveScore,
  SidebarMobileToggle,
  ToggleSortButton,
} from './SidebarComponents';
import ClubRow from './ClubRow';

interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [groupByLeague, setGroupByLeague] = useState(true);

  const toggleSort = () => {
    setGroupByLeague(!groupByLeague);
  };

  return (
    <div
      className={` ${
        isExpanded ? 'h-[100%] ' : 'h-[30vh]'
      } fixed sm:min-h-screen sm:border-t-0 sm:border-l max-h-[calc(85vh-60px)] sm:min-w-[320px] sm:relative bottom-0 left-0 z-[1000] w-full   transition-all duration-300 transform flex flex-col-reverse  sm:top-0  bg-white shadow-lg`}
    >
      <SidebarBackground />.
      <SidebarMobileToggle
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {/* SIDEBAR HEADER */}
      <div className={` ${
        isExpanded ? 'bottom-0' : '-bottom-full'
      } flex flex-col-reverse sm:flex-col items-end  transition-all duration-400 h-100px sm:h-[120px] justify-between p-4 w-full fixed bg-white  z-10 pr-[15px] sm:pb-0 border-t`}>
        <div className="flex gap-4 items-center justify-between w-full h-[40px]">
          <ClearProgressButton clearProgress={clearProgress} />
          <ToggleSortButton toggleSort={toggleSort} />
          <h1 className="mb-2 ml-auto text-4xl font-bold text-gray-800">EFL 23/24</h1>
        </div>
        <SidebarLiveScore numOfClubsInMap={clubsInMap.length} />
      </div>
      {/* LEAGUE GROUPS */}
      <div className="flex flex-col items-center justify-start h-full w-full py-4 relative z-1 pr-[15px] p-4 overflow-scroll max-h-[calc(100dvh - 90px)]">
        {!groupByLeague && (
          <div className="w-full pb-2 text-sm text-gray-500">
            {clubsInMap.map((club) => {
              return (
                <ClubRow key={club.id} club={club} panToClub={panToClub} />
              );
            })}
          </div>
        )}
        {groupByLeague && (
          <>
            <LeagueGroup
              title="Premier League"
              clubs={clubsInMap.filter(
                (club) => club.league === 'Premier League'
              )}
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
              clubs={clubsInMap.filter(
                (club) => club.league === 'EFL League One'
              )}
              panToClub={panToClub}
            />
            <LeagueGroup
              title="League Two"
              clubs={clubsInMap.filter(
                (club) => club.league === 'EFL League Two'
              )}
              panToClub={panToClub}
            />
          </>
        )}
      </div>
    </div>
  );
}
