'use client';

import { useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Merci de renseigner votre nom';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Merci de renseigner votre email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    if (!formData.message) newErrors.message = 'N\'oubliez pas votre message';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors(prev => ({
          ...prev,
          message: data.message || 'L\'envoi a échoué. Merci de réessayer.'
        }));
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setErrors(prev => ({
        ...prev,
        message: 'Problème de connexion. Merci de réessayer.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Parlons-en</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, une idée, un projet de partenariat ? On vous répond avec plaisir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Nous joindre</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:contact@naamâ.com" className="text-primary hover:underline">
                    contact@naamâ.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Site web</h3>
                  <a href="https://naamâ.com" className="text-primary hover:underline">
                    naamâ.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Réponse rapide</h3>
                  <p className="text-gray-600">On revient vers vous sous 24 h, souvent moins.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-2">Vous êtes restaurateur ?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Vendez vos invendus sous forme de paniers surprise. Rendez-vous sur notre page dédiée pour en savoir plus.
              </p>
              <a href="/solutions-pro" className="text-primary font-medium text-sm hover:underline">
                Voir l’espace partenaires &rarr;
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Votre nom" disabled={isLoading} />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your@email.com" disabled={isLoading} />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise / Restaurant <span className="text-gray-400">(optionnel)</span>
                  </label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary"
                    placeholder="Nom de votre entreprise ou restaurant" disabled={isLoading} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Dites-nous tout..." disabled={isLoading}></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={isLoading}>
                  {isLoading ? 'Envoi...' : 'Envoyer'}
                </button>
              </form>
            ) : (
              <div className="text-center p-12 bg-primary/5 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bien reçu !</h3>
                <p className="text-gray-600">
                  Merci pour votre message. On vous répond à {formData.email} d’ici 24 h.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
