'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';


export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      console.log('Sending signup request:', formData);
      const response = await fetch(API_ENDPOINTS.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Signup response:', data);

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ email: '', phone: '' });
      } else {
        setSubmitError(data.message || 'Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 relative">
        {/* Background image with overlay */}
        <Image
          src="https://i.ibb.co/sdYn26CW/food-market.png"
          alt="Food Market"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for better text readability */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center pt-16 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Save Food, Save Money, Save the Planet
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get exclusive discounts on surplus food from your favorite local restaurants and stores.
            </p>
            <Link href="/download" className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors">
              Find Deals Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Last-Minute Deals</h3>
              <p className="text-gray-600">Get up to 70% off on quality food that would otherwise go to waste</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Restaurants</h3>
              <p className="text-gray-600">Discover amazing deals from restaurants and stores near you</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Help reduce food waste and protect the environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Browse Deals</h3>
              <p className="text-gray-600">Find available deals from restaurants and stores in your area</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Place Order</h3>
              <p className="text-gray-600">Reserve and pay for your food through our secure platform</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Collect & Enjoy</h3>
              <p className="text-gray-600">Pick up your food during the specified collection time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get Early Access</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sign up now to be among the first to access exclusive deals in your area.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Signing up...' : 'Get Early Access'}
              </button>
              {submitError && (
                <p className="text-red-200 text-sm mt-2">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-white text-sm mt-2">
                  Thanks for signing up! We'll notify you when we launch in your area.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
