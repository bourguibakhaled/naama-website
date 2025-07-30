'use client';

import { useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';

export default function DownloadApp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      phone: ''
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (minimum 10 digits)';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors(prev => ({
          ...prev,
          email: data.message || 'Registration failed'
        }));
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors(prev => ({
        ...prev,
        email: 'Failed to submit. Please try again.'
      }));
    } finally {
      setIsLoading(false);
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
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white pt-32 pb-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Early Access
          </h1>
          <p className="text-xl text-gray-600">
            Be among the first to try Naama Market
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your email"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your phone number"
                disabled={isLoading}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Get Early Access'}
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 text-center">
              Thank you for signing up! The app is not available yet, but you'll be among the first to know and receive exclusive perks at launch: free baskets, discounts, and more surprises.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
