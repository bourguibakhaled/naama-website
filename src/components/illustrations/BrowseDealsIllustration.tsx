export default function BrowseDealsIllustration() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Restaurant Card */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Italian Restaurant</h3>
              <p className="text-sm text-gray-500">1.2 km away</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 line-through">$25.00</div>
            <div className="text-lg font-bold text-primary">$8.50</div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Pickup Time:</span>
            <span className="text-sm text-gray-600">5:00 PM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Items Available:</span>
            <span className="text-sm text-gray-600">3</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-gray-100 rounded-lg p-3 flex items-center">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-gray-400">Search restaurants...</span>
        </div>
        <button className="bg-gray-100 p-3 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>

      {/* Map Preview */}
      <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  );
}
