interface DashProps {
  addClubToMap: (club: IFootballClub) => void;
}

export default function Dash({ addClubToMap }: DashProps) {
  return (
    <div className=" left-1/2 absolute -translate-x-1/2 top-[100px]  min-w-[300px] h-[50px] bg-white  z-[10000] border-2 border-gray-800 rounded-3xl">
      <input
        type="text"
        className="w-full h-full rounded-3xl px-4 py-2 font-bold"
        placeholder="Find a club"
      />
    </div>
  );
}
