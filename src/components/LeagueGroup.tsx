import { Disclosure, Transition } from '@headlessui/react';
import ClubRow from './ClubRow';
import { getIcon } from '../utils/assetUtils';

interface LeagueGroupProps {
  title: string;
  clubs: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
  maxClubs?: number;
}

export default function LeagueGroup({
  title,
  clubs,
  panToClub,
  maxClubs = 24,
}: LeagueGroupProps) {
  const noClubs = clubs.length === 0;
  const noClubsClass = noClubs
    ? 'opacity-90 bg-gray-100 text-gray-500 pointer-events-none'
    : '';
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`${noClubsClass} flex text-purple-900 w-full border border-gray-300 h-[40px] bg-white justify-start items-center rounded-lg  px-3  text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 my-1 relative overflow-hidden `}
          >
            <div
              className="absolute left-0 z-0 h-full bg-purple-200"
              style={{ width: `${(clubs.length / maxClubs) * 100}%` }}
            />
            <img
              src={getIcon(title)}
              alt={title}
              className=" w-[25px] h-[25px] rounded-3xl relative z-1"
            />
            <span className="relative ml-2 mr-auto z-1">{title}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 ${
                noClubs ? 'text-gray-500' : 'text-purple-700'
              } relative z-1 `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Disclosure.Button>

          <Disclosure.Panel className="w-full pb-2 text-sm text-gray-500">
            {clubs.map((club) => {
              return (
                <ClubRow key={club.id} club={club} panToClub={panToClub} />
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
