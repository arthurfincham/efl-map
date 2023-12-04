import { useEffect, useState } from 'react';
import { FullClubList, InputMatchList } from '../data';
import GameComplete from './GameComplete';

const FLAT_ALTERNATIVES_ARR = InputMatchList.map((club) =>
  club.alternatives.map((alt) => alt.toLowerCase())
).flat();
interface DashProps {
  addClubToMap: (club: IFootballClub) => void;
  clubsInMapIds: string[];
  gameCompleted: boolean;
}

export default function Dash({
  addClubToMap,
  clubsInMapIds,
  gameCompleted,
}: DashProps) {
  const [inputValue, setInputValue] = useState('');

  const [triggerExistingClub, setTriggerExistingClub] = useState(false);

  const findClubById = (id: string): IFootballClub => {
    return FullClubList.find((club) => club.id === id);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      if (FLAT_ALTERNATIVES_ARR.includes(inputValue.toLowerCase())) {
        const id = InputMatchList.find((club) => {
          return club.alternatives.some(
            (alt) => alt.toLowerCase() === inputValue.toLowerCase()
          );
        }).id;
        if (clubsInMapIds.includes(id)) {
          setTriggerExistingClub(true);
          setInputValue('');
          return;
        }
        const club = findClubById(id);
        addClubToMap(club);
        setInputValue('');
      }
    }
  }, [inputValue]);

  useEffect(() => {
    if (triggerExistingClub) {
      const timer1 = setTimeout(() => setTriggerExistingClub(false), 300);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [triggerExistingClub]);

  if (gameCompleted) return <GameComplete />;

  return (
    <div className="left-1/2 absolute -translate-x-1/2 top-[15vh] w-full sm:max-w-[300px] min-w-[300px] h-[50px] z-[1000] px-4 pr-16" onClick={(e) => e.stopPropagation()}>
      <input
        type="text"
        className={`w-full h-full px-4 py-2 font-bold border-2 shadow-xl text-gray-900 border-gray-800 rounded-3xl bg-white focus:outline-black ${
          triggerExistingClub ? 'wiggle' : ''
        }`}
        placeholder={triggerExistingClub ? 'Already selected' : 'Find a club'}
        value={inputValue}
        onChange={handleInputChange}
      />

    </div>
  );
}
