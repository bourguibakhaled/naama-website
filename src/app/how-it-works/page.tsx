'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowseDealsIllustration from '@/components/illustrations/BrowseDealsIllustration';
import OrderProcessIllustration from '@/components/illustrations/OrderProcessIllustration';
import CollectionProcessIllustration from '@/components/illustrations/CollectionProcessIllustration';

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative py-12">
        {/* Background image with overlay */}
        <Image
          src="https://i.ibb.co/jkL6vKVK/fruit.png"
          alt="Fruit Market"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for better text readability */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Naama Market Works
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join us in reducing food waste while enjoying great deals on quality food. Here's how you can get started.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">01</div>
                <h2 className="text-2xl font-bold mb-4">Browse Available Deals</h2>
                <p className="text-gray-600 mb-4">
                  Explore a variety of delicious food options from local restaurants and stores in your area. Each listing shows:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Original and discounted prices
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Available pickup times
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Restaurant/store location
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <BrowseDealsIllustration />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">02</div>
                <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
                <p className="text-gray-600 mb-4">
                  Once you find something you like, placing an order is quick and easy:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Select your preferred pickup time
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pay securely through our platform
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Receive instant confirmation
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <OrderProcessIllustration />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">03</div>
                <h2 className="text-2xl font-bold mb-4">Collect & Enjoy</h2>
                <p className="text-gray-600 mb-4">
                  Picking up your order is simple and convenient:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Show your order confirmation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Collect during your chosen time slot
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rate your experience
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <CollectionProcessIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What happens if I'm late for pickup?</h3>
              <p className="text-gray-600">
                We recommend collecting your order during the specified time slot. If you're running late, contact the store directly through our app to discuss options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can I cancel my order?</h3>
              <p className="text-gray-600">
                Orders can be cancelled up to 1 hour before the pickup time. After that, cancellations are at the store's discretion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What's in the surprise bag?</h3>
              <p className="text-gray-600">
                Surprise bags contain a random selection of surplus food items. While contents vary, the value is always greater than what you pay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Is the food fresh?</h3>
              <p className="text-gray-600">
                Yes! All food is perfectly good to eat but would otherwise go to waste due to overstocking or approaching best-before dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are saving money and reducing food waste.
          </p>
          <Link href="/download" className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors">
            Download App Now
          </Link>
        </div>
      </section>
    </div>
  );
}
