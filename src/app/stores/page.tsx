'use client';

import { useState, lazy, Suspense } from 'react';
import { stores } from '@/data/stores';
import { Store } from '@/lib/types';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const StoreMap = lazy(() => import('@/components/map/store-map'));

export default function StoresPage() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Locations</h1>
        <p className="text-gray-600">
          Visit one of our {stores.length} store locations for personalized service and hands-on product demos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {stores.map((store) => (
              <div
                key={store.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedStore?.id === store.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => handleStoreSelect(store)}
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{store.name}</h3>

                <div className="flex items-start space-x-2 mb-2">
                  <MapPinIcon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p>{store.address}</p>
                    <p>{store.city}, {store.state} {store.zipCode}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <PhoneIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{store.phone}</p>
                </div>

                <div className="flex items-start space-x-2">
                  <ClockIcon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Store Hours:</p>
                    <div className="grid grid-cols-2 gap-x-4 mt-1">
                      {Object.entries(store.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="font-medium">{day.slice(0, 3)}:</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Map</h2>
          <Suspense fallback={
            <div className="h-96 w-full rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500">Loading map...</div>
            </div>
          }>
            <StoreMap
              stores={stores}
              selectedStore={selectedStore}
              onStoreSelect={handleStoreSelect}
            />
          </Suspense>

          {selectedStore && (
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {selectedStore.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{selectedStore.address}</p>
                    <p className="text-gray-600">{selectedStore.city}, {selectedStore.state} {selectedStore.zipCode}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{selectedStore.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Hours</p>
                    <div className="space-y-1">
                      {Object.entries(selectedStore.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-gray-900 font-medium">{day}:</span>
                          <span className="text-gray-600">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedStore.lat},${selectedStore.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}