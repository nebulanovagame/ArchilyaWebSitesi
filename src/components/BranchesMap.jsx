import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

function FitBounds({ firms }) {
  const map = useMap();
  const fitted = useRef(false);

  useEffect(() => {
    if (fitted.current || firms.length === 0) return;
    fitted.current = true;

    const coords = firms.filter((f) => f.latitude && f.longitude);
    if (coords.length === 0) return;

    if (coords.length === 1) {
      map.setView([coords[0].latitude, coords[0].longitude], 7);
      return;
    }

    const bounds = L.latLngBounds(coords.map((f) => [f.latitude, f.longitude]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
  }, [firms, map]);

  return null;
}

export default function BranchesMap({ firms = [] }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    try {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    } catch {
      // Non-critical
    }
  }, []);

  return (
    <MapContainer
      center={[39.5, 29.0]}
      zoom={6}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: '#0f1115' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds firms={firms} />
      {firms.filter((f) => f.latitude && f.longitude).map((firm) => (
        <Marker
          key={firm.id}
          position={[firm.latitude, firm.longitude]}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `<div style="
              width: 32px; height: 32px;
              background: ${firm.type === 'partner' ? '#fbbf24' : '#c6a87c'};
              border: 3px solid rgba(15,17,21,0.9);
              border-radius: 50%;
              box-shadow: 0 0 20px ${firm.type === 'partner' ? 'rgba(251,191,36,0.4)' : 'rgba(198,168,124,0.4)'};
              display: flex; align-items: center; justify-content: center;
              font-size: 14px;
            ">${firm.type === 'partner' ? '🤝' : firm.type === 'merkez' ? '⭐' : '🏢'}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          })}
        >
          <Popup>
            <div style={{ fontFamily: 'sans-serif', fontSize: '13px', minWidth: '160px' }}>
              <strong style={{ color: '#c6a87c' }}>{firm.name}</strong>
              <p style={{ margin: '4px 0', color: '#666' }}>{firm.city}, {firm.country}</p>
              {firm.website && (
                <a href={firm.website} target="_blank" rel="noopener noreferrer" style={{ color: '#c6a87c', fontSize: '12px' }}>
                  {firm.website}
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
