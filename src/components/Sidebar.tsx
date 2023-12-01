interface SidebarProps {
  clubsInMap: IFootballClub[];
  panToClub: (coords: ICoordinates) => void;
}

export default function Sidebar({ clubsInMap, panToClub }: SidebarProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-[400px] bg-red-100">
      <div className="flex flex-col items-center justify-center h-[100px] w-full bg-red-300">
        <h1 className="text-2xl font-bold">Clubs in Map</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        {clubsInMap.length > 0 ? (
          clubsInMap.map((club) => {
            return (
              <div
                key={club.uuid}
                className="flex items-center justify-center h-[50px] w-[300px] bg-white border-2 border-gray-800 rounded-3xl my-2 cursor-pointer"
                onClick={() => panToClub(club.stadiumCoords)}
              >
                <img
                  src={club.badgeLink}
                  alt={club.name}
                  className="h-full w-[50px] rounded-3xl"
                />
                <h1 className="text-xl font-bold mx-4">{club.name}</h1>
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
