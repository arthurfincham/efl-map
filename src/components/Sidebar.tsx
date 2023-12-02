import { useState } from 'react';
import { clearProgress } from '../utils/progressUtils';
import LeagueGroup from './LeagueGroup';

interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`flex flex-col ${
        isExpanded
          ? 'h-[calc(100dhv)] top-[0px] mt-[35px] '
          : 'max-h-[80px] h-[80px]'
      } sm:min-h-screen min-w-[100dvw]  border-t sm:border-t-0 sm:border-l sm:min-w-[320px] bg-gray-100 absolute sm:relative bottom-0 left-0 z-[10000] justify-start`}
    >
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
      <div className="absolute top-[-15px] z-10 w-[100px] h-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 border rounded-t-md sm:hidden left-1/2 flex justify-center items-center" onClick={() => setIsExpanded(!isExpanded)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isExpanded ? 'rotate-180 transform' : ''} w-6 h-6`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
</svg>

      </div>
      <div className="flex flex-col-reverse sm:flex-col items-end  h-[120px] sm:h-[120px] justify-between p-4 w-full relative z-1 pr-[15px] pb-0">
        <div className="flex items-center justify-between w-full h-[40px]">
          <div
            onClick={() => clearProgress()}
            className="p-2 bg-gray-100 border rounded-md cursor-pointer hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-4xl font-bold">EFL 23/24</h1>
        </div>
        <div
          className="flex w-full border border-gray-300 min-h-[40px] bg-white justify-end items-center rounded-lg  px-3  text-right text-sm font-medium text-gray-500  my-1 relative overflow-hidden ml-4 mb-6 sm:mb-1"
          
        >
          <div
            className="absolute left-0 z-0 h-full bg-purple-200"
            style={{ width: `${(clubsInMap.length / 92) * 100}%` }}
          />
          {92 - clubsInMap.length} / 92
        </div>
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full py-4 relative z-1 pr-[15px] p-4 overflow-scroll max-h-[calc(100dvh - 90px)]">
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
