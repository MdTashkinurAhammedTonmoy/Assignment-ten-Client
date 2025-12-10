import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
  const position = [23.6850, 90.3563];
  return (
    <div className="mt-8 mb-8">
      <h3 className="text-5xl font-bold mb-3 text-center">We are available in 64 distructs</h3>
      <div></div>
      <div className="border w-11/12 mx-auto h-[800px]">
        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-[800px]">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
