interface ClubRowProps {
  club: IFootballClub;
  panToClub: (coords: ICoordinates) => void;
}

export default function ClubRow({ club, panToClub }: ClubRowProps) {
  return (
    <div
      key={club.id}
      className="flex items-center justify-start  h-[40px] w-full bg-white border border-gray-300 rounded-lg my-1 cursor-pointer px-3"
      onClick={() => panToClub(club.coords)}
    >
      <img
        src={club.badgeLink}
        alt={club.name}
        className=" max-w-[25px] w-full max-h-[25px]  rounded-3xl"
      />
      <span className="ml-2 text-sm font-medium text-gray-800">
        {club.name}
      </span>
    </div>
  );
}
