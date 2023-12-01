import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import Dash from './components/Dash';
import Sidebar from './components/Sidebar';
import { FullClubList } from './data';

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: [60, 60],
  });
}

function ChangeView({ center, zoom }) {
  const map = useMap();
  // map.setView(center, zoom);
  map.flyTo(center, zoom, {
    animate: true,
    duration: 0.5,
    easeLinearity: 10,
    noMoveStart: true,
  });

  return null;
}

const App = () => {
  const position = { lat: 51.5, lng: -0.13 };

  const [clubsInMap, setClubsInMap] = useState<IFootballClub[]>([]);

  const [mapPosition, setMapPosition] = useState(position);

  const handleAddToMap = (club) => {
    window.localStorage.setItem(
      'efl-map-progress',
      `${[...clubsInMap.map((club) => club.uuid), club.uuid]}`
    );
    window.localStorage.setItem(
      'efl-map-location',
      JSON.stringify(club.stadiumCoords)
    );
    setClubsInMap([...clubsInMap, club]);
    setMapPosition(club.stadiumCoords);
  };

  useEffect(() => {
    if (window.localStorage.getItem('efl-map-progress')) {
      const progress = window.localStorage
        .getItem('efl-map-progress')
        .split(',');
      const clubs = progress.map((uuid) => {
        return FullClubList.find((club) => club.uuid === uuid);
      });
      setClubsInMap(clubs);
    }
    if (window.localStorage.getItem('efl-map-location')) {
      const location = JSON.parse(
        window.localStorage.getItem('efl-map-location')
      );
      setMapPosition(location);
    }
  }, []);

  return (
    <div className=" min-w-screen flex w-full h-full min-h-screen">
      <div className="relative">
        <Dash addClubToMap={(club) => handleAddToMap(club)} />

        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          style={{ minHeight: '100vh', minWidth: 'calc(100vw - 320px)' }}
        >
          {clubsInMap.length > 0 && (
            <ChangeView center={mapPosition} zoom={14} />
          )}
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png"
          />

          {clubsInMap.map((club) => {
            return (
              <Marker
                key={club.uuid}
                position={club.stadiumCoords}
                icon={createIcon(club.badgeLink)}
              >
                <Popup>{club.name}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <Sidebar
        clubsInMap={clubsInMap}
        panToClub={(coords) => setMapPosition(coords)}
      />
    </div>
  );
};

export default App;
