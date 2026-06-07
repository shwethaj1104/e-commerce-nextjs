'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Store } from '@/lib/types';
import 'leaflet/dist/leaflet.css';

interface StoreMapProps {
  stores: Store[];
  selectedStore?: Store | null;
  onStoreSelect?: (store: Store) => void;
}

const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-map-marker',
    html: `
      <div style="
        background-color: #2563eb;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          background-color: white;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

export default function StoreMap({ stores, selectedStore, onStoreSelect }: StoreMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (selectedStore && mapRef.current) {
      mapRef.current.setView([selectedStore.lat, selectedStore.lng], 15);
    }
  }, [selectedStore]);

  const center: [number, number] = selectedStore
    ? [selectedStore.lat, selectedStore.lng]
    : stores.length > 0
    ? [stores[0].lat, stores[0].lng]
    : [37.7749, -122.4194];

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-300">
      <MapContainer
        center={center}
        zoom={selectedStore ? 15 : 10}
        style={{ height: '100%', width: '100%' }}
        ref={(map) => {
          mapRef.current = map;
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.lat, store.lng]}
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => {
                onStoreSelect?.(store);
              },
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-lg mb-2">{store.name}</h3>
                <p className="text-gray-600 mb-1">{store.address}</p>
                <p className="text-gray-600 mb-2">{store.city}, {store.state} {store.zipCode}</p>
                <p className="text-blue-600 font-medium">{store.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}