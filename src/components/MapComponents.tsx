import { MapProps } from './Map';
import L from 'leaflet';
import { useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

export default function MapComponents({
  clubsInMap,
  mapPosition,
  zoomLevel,
  setZoomLevel,
}: MapProps) {
  const map = useMapEvents({
    zoomend: (event) => {
      setZoomLevel(event.target.getZoom());
    },
  });

  useEffect(() => {
    map.flyTo(mapPosition, 14, {
      animate: true,
      duration: 0.5,
      easeLinearity: 10,
      noMoveStart: true,
    });
  }, [mapPosition]);

  const createIcon = (url) => {
    return new L.Icon({
      iconUrl: url,
      iconSize: [4 * zoomLevel, 4 * zoomLevel],
      className: '',
    });
  };

  return (
    <>
      {clubsInMap.map((club) => {
        return (
          <Marker
            key={club.id}
            position={club.coords}
            icon={createIcon(club.badgeLink)}
          >
            <Popup>{club.name}</Popup>
          </Marker>
        );
      })}
    </>
  );
}
