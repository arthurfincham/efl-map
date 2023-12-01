interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-[320px] bg-gray-100 pr-[15px]">
      <div className="flex flex-col items-center justify-center h-[100px] w-full ">
        <h1 className="text-2xl font-bold">Clubs in Map</h1>
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full p-4 ">
        {clubsInMap.length > 0 ? (
          clubsInMap.map((club) => {
            return (
              <div
                key={club.uuid}
                className="flex items-center justify-start h-[40px] w-full bg-white border-1 border-gray-800 rounded-md my-1 cursor-pointer px-2"
                onClick={() => panToClub(club.stadiumCoords)}
              >
                <img
                  src={club.badgeLink}
                  alt={club.name}
                  className=" w-[25px] h-[25px] rounded-3xl"
                />
                <h1 className="text-sm font-bold ml-2">{club.name}</h1>
              </div>
            );
          })
        ) : (
          <h1 className="text-xl font-bold">No clubs in map</h1>
        )}
      </div>
    </div>
  );
}
