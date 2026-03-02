'use client';

import Link from 'next/link';
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
    const newErrors = { email: '', phone: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Merci de renseigner votre email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    const phoneRegex = /^[0-9]{8}$/;
    if (!formData.phone) {
      newErrors.phone = 'Merci de renseigner votre numéro';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Numéro invalide (8 chiffres attendus)';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.signup, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors(prev => ({ ...prev, email: data.message || 'L\'inscription a échoué. Merci de réessayer.' }));
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors(prev => ({ ...prev, email: 'Problème de connexion. Merci de réessayer.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            L'app Naam&acirc; arrive bientôt
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Laissez-nous votre contact et soyez prévenus dès le lancement. Les premiers inscrits auront droit à des paniers offerts et des réducs exclusives.
          </p>
        </div>

        {/* App features preview */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Parcourir</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Carte</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Impact éco</p>
          </div>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-center mb-2">Pré-inscription gratuite</h2>
            <p className="text-sm text-gray-500 text-center mb-4">Paniers offerts, réductions de lancement et accès en avant-première.</p>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="your@email.com" disabled={isLoading} />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Votre numéro de téléphone" disabled={isLoading} />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            <button type="submit"
              className="w-full bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={isLoading}>
              {isLoading ? 'Envoi...' : 'Je m\'inscris'}
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">C’est noté !</h3>
            <p className="text-gray-600">
              Merci ! On vous prévient dès que l’app est disponible. En attendant, vous faites partie des VIP du lancement : paniers offerts, réducs et accès prioritaire.
            </p>
            <Link href="/" className="inline-block mt-6 text-primary font-medium hover:underline">
              Retour à l’accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
