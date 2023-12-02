import { useEffect, useRef, useState } from 'react';
import Dash from './components/Dash';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import { getProgress, updateProgress } from './utils/progressUtils';

const App = () => {
  const position = { lat: 51.5, lng: -0.13 };

  const [clubsInMap, setClubsInMap] = useState<IFootballClub[]>([]);

  const clubsInMapIds = clubsInMap.map((club) => club.id);

  const [mapPosition, setMapPosition] = useState(position);

  const [zoomLevel, setZoomLevel] = useState(14);

  const handleAddToMap = (club: IFootballClub) => {
    updateProgress([...clubsInMapIds, club.id], club.coords);
    setClubsInMap([...clubsInMap, club]);
    flyToStadium(club.coords, 14);
  };

  useEffect(() => {
    const { clubs, position } = getProgress();
    if (clubs) setClubsInMap(clubs);
    if (position) setMapPosition(position);
  }, []);

  const flyToStadium = (coords: ICoordinates, zoom: number) => {
    setMapPosition(coords);
    setZoomLevel(zoom);
  };

  return (
    <div className="relative flex w-full h-full min-h-screen min-w-screen">
      <div className="relative ">
        <Dash
          addClubToMap={(club) => handleAddToMap(club)}
          clubsInMapIds={clubsInMapIds}
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
      />
    </div>
  );
};

export default App;
