import MapComponents from './MapComponents';
import { MapContainer, TileLayer } from 'react-leaflet';

export interface MapProps {
  clubsInMap: IFootballClub[];
  mapPosition: { lat: number; lng: number };
  zoomLevel: number;
  setZoomLevel: (zoom: number) => void;
}

export default function Map({
  clubsInMap,
  mapPosition,
  zoomLevel,
  setZoomLevel,
}: MapProps) {
  return (
    <MapContainer
      center={{ lat: 51.5, lng: -0.13 }}
      zoom={7}
      scrollWheelZoom={true}
      minZoom={7}
      maxZoom={16}
      style={{ minHeight: '100vh', minWidth: 'calc(100vw - 320px)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png"
      />
      <MapComponents
        clubsInMap={clubsInMap}
        mapPosition={mapPosition}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />
    </MapContainer>
  );
}
