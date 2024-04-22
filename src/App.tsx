import { useEffect, useState } from 'react';
import Dash from './components/Dash';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import { getProgress, updateProgress } from './utils/progressUtils';

export const STADIA = false;

const App = () => {
  const position = { lat: 51.5, lng: -0.13 };

  const [clubsInMap, setClubsInMap] = useState<IFootballClub[]>([]);

  const clubsInMapIds = clubsInMap.map((club) => club.id);

  const [mapPosition, setMapPosition] = useState(position);

  const [zoomLevel, setZoomLevel] = useState(14);

  const [gameCompleted, setGameCompleted] = useState(false);

  const [groupByLeague, setGroupByLeague] = useState(true);

  const handleAddToMap = (club: IFootballClub) => {
    updateProgress([club.id, ...clubsInMapIds], club.coords, groupByLeague);
    setClubsInMap([club, ...clubsInMap]);
    flyToStadium(club.coords, 14);
  };

  useEffect(() => {
    if (clubsInMapIds.length === 92) setGameCompleted(true);
  }, [clubsInMapIds]);

  useEffect(() => {
    const { clubs, position, sortByLeague } = getProgress();
    if (clubs) setClubsInMap(clubs);
    if (position) setMapPosition(position);
    if (sortByLeague !== null) setGroupByLeague(sortByLeague);
  }, []);

  const flyToStadium = (coords: ICoordinates, zoom: number) => {
    setMapPosition(coords);
    setZoomLevel(zoom);
  };

  return (
    <div className="relative flex w-full h-full max-h-[100dvh] min-h-screen min-w-screen ">
      <div className="relative">
        <Dash
          addClubToMap={(club) => handleAddToMap(club)}
          clubsInMapIds={clubsInMapIds}
          gameCompleted={gameCompleted}
        />
        <Map
          clubsInMap={clubsInMap}
          mapPosition={mapPosition}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
        />
      </div>
      <Sidebar
        clubsInMap={clubsInMap}
        panToClub={(coords) => flyToStadium(coords, 14)}
        groupByLeague={groupByLeague}
        setGroupByLeague={setGroupByLeague}
      />
    </div>
  );
};

export default App;
