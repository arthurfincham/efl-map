import { Disclosure, Transition } from '@headlessui/react';
import ClubRow from './ClubRow';

interface LeagueGroupProps {
  // isOpen: boolean;
  title: string;
  clubs: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

const getIcon = (title: string) => {
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

export default function LeagueGroup({
  // isOpen,
  title,
  clubs,
  panToClub,
}: LeagueGroupProps) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full h-[40px] justify-start items-center rounded-lg bg-purple-100 px-3  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 my-1">
            <img
              src={getIcon(title)}
              alt={title}
              className=" w-[25px] h-[25px] rounded-3xl"
            />
            <span className="ml-2 mr-auto">{title}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                open ? '' : 'rotate-180 transform'
              } h-5 w-5 text-purple-500 `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Disclosure.Button>

          <Disclosure.Panel className="pb-2  text-sm text-gray-500 w-full">
            {clubs.map((club) => {
              return (
                <ClubRow key={club.uuid} club={club} panToClub={panToClub} />
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
