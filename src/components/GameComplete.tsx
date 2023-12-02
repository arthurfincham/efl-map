import { getIcon } from '../utils/assetUtils';
const leagues = ['Premier League', 'Championship', 'League One', 'League Two'];

export default function GameComplete() {
  return (
    <div className="left-1/2 absolute -translate-x-1/2 -translate-y-1/2 top-1/2  min-w-[500px] max-h-[400px] h-full z-[10000] ">
      <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-6 py-24 font-bold text-center bg-white border-2 border-gray-800 shadow-xl rounded-3xl">
        <h3 className="text-3xl">Congratulations</h3>
        <h3 className="text-xl text-gray-700">
          You've visited all the stadiums!
        </h3>
        <div className="flex items-center justify-around gap-2 mt-6">
          {leagues.map((league) => {
            return (
              <div className="flex flex-col items-center justify-between">
                <img
                  src={getIcon(league)}
                  alt={league}
                  className="w-[60px] h-[60px]"
                />
                <span className="text-xs font-normal">
                  {league === 'Premier League' ? '20/20' : '24/24'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
