import { useEffect, useState } from 'react';
import { FullClubList, InputMatchList } from '../data';

const FLAT_ALTERNATIVES_ARR = InputMatchList.map((club) =>
  club.alternatives.map((alt) => alt.toLowerCase())
).flat();
interface DashProps {
  addClubToMap: (club: IFootballClub) => void;
}

export default function Dash({ addClubToMap }: DashProps) {
  const [inputValue, setInputValue] = useState('');

  const findClubByUuid = (uuid: string): IFootballClub => {
    return FullClubList.find((club) => club.uuid === uuid);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      if (FLAT_ALTERNATIVES_ARR.includes(inputValue.toLowerCase())) {
        const uuid = InputMatchList.find((club) => {
          return club.alternatives.some(
            (alt) => alt.toLowerCase() === inputValue.toLowerCase()
          );
        }).uuid;
        const club = findClubByUuid(uuid);
        addClubToMap(club);
        setInputValue('');
      }
    }
  }, [inputValue]);

  return (
    <div className=" left-1/2 absolute -translate-x-1/2 top-[100px]  min-w-[300px] h-[50px] bg-white  z-[10000] border-2 shadow-xl border-gray-800 rounded-3xl">
      <input
        type="text"
        className="w-full h-full rounded-3xl px-4 py-2 font-bold focus:outline-black "
        placeholder="Find a club"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
