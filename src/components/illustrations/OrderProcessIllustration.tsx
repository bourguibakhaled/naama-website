export default function OrderProcessIllustration() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Order Details */}
      <div className="mb-6">
        <h3 className="font-semibold mb-4">Order Details</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Italian Restaurant</h4>
              <p className="text-sm text-gray-500">Surprise Dinner Bag</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Original Price:</span>
              <span className="line-through">$25.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span className="text-green-600">-66%</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Final Price:</span>
              <span className="text-primary">$8.50</span>
            </div>
          </div>
        </div>

        {/* Pickup Time Selection */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Select Pickup Time</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="border-2 border-primary bg-primary/5 rounded-lg p-3 text-center">
              <div className="font-semibold text-primary">5:00 PM - 6:00 PM</div>
              <div className="text-sm text-gray-600">3 slots left</div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-3 text-center">
              <div className="font-semibold text-gray-600">6:00 PM - 7:00 PM</div>
              <div className="text-sm text-gray-600">5 slots left</div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Payment Method</h4>
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span>Credit Card</span>
              </div>
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-sm text-gray-500">
              Ending in •••• 4242
            </div>
          </div>
        </div>

        {/* Order Button */}
        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
          Place Order - $8.50
        </button>
      </div>
    </div>
  );
}
