import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { data } from './data';

import { Dialog } from '@headlessui/react';
import L, { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import Dash from './components/Dash';
import Sidebar from './components/Sidebar';

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: [30, 30],
  });
}

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const App = () => {
  const position = { lat: 51.5, lng: -0.13 };

  const [clubsInMap, setClubsInMap] = useState([]);

  const [mapPosition, setMapPosition] = useState(position);

  const getStadiumCoords = (club) => {
    const coords = club.coordinates;
    const regex = /Point\(([-\d.]+)\s([-\d.]+)\)/;
    const match = coords.match(regex);
    const longitude = parseFloat(match[1]);
    const latitude = parseFloat(match[2]);
    return { lat: latitude, lng: longitude };
  };

  const handleAddToMap = (club) => {
    setMapPosition(getStadiumCoords(club));
    setClubsInMap([...clubsInMap, club]);
  };

  return (
    <div className=" min-w-screen flex w-full h-full min-h-screen">
      <div className="relative">
        <Dash addClubToMap={(club) => handleAddToMap(club)} />

        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          style={{ minHeight: '100vh', minWidth: 'calc(100vw - 400px)' }}
        >
          {clubsInMap.length > 0 && (
            <ChangeView center={mapPosition} zoom={16} />
          )}

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {clubsInMap.map((club) => {
            const coords = club.coordinates;
            const regex = /Point\(([-\d.]+)\s([-\d.]+)\)/;
            const match = coords.match(regex);
            const longitude = parseFloat(match[1]);
            const latitude = parseFloat(match[2]);
            return (
              <Marker
                position={[latitude, longitude]}
                key={club.clubLabel}
                icon={createIcon('https:' + club.badgeLink)}
              >
                <Popup>{club.clubLabel}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <Sidebar />
    </div>
  );
};

export default App;