export default function CollectionProcessIllustration() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Order Status */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Order #2024-0589</h3>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Ready for Pickup
          </span>
        </div>
        
        {/* Progress Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
          {/* Confirmed Step */}
          <div className="relative flex items-center mb-8">
            <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-12">
              <h4 className="font-semibold">Order Confirmed</h4>
              <p className="text-sm text-gray-500">Today, 4:30 PM</p>
            </div>
          </div>
          {/* Being Prepared Step */}
          <div className="relative flex items-center mb-8">
            <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-12">
              <h4 className="font-semibold">Being Prepared</h4>
              <p className="text-sm text-gray-500">Today, 4:45 PM</p>
            </div>
          </div>
          {/* Ready for Pickup Step */}
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-12">
              <h4 className="font-semibold">Ready for Pickup</h4>
              <p className="text-sm text-gray-500">Today, 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Details */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold mb-4">Collection Details</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="font-medium">Italian Restaurant</div>
              <div className="text-sm text-gray-600">123 Main Street, City</div>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="font-medium">Pickup Time</div>
              <div className="text-sm text-gray-600">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <div>
              <div className="font-medium">Order</div>
              <div className="text-sm text-gray-600">1x Surprise Dinner Bag</div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <div className="w-32 h-32 bg-white mx-auto mb-3 rounded-lg flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-800 rounded-lg"></div>
        </div>
        <p className="text-sm text-gray-600">
          Show this QR code when collecting your order
        </p>
      </div>
    </div>
  );
}
