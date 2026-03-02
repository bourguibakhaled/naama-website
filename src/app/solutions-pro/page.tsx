'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { API_ENDPOINTS } from '@/config/api';

export default function SolutionsPro() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      company: '',
      message: ''
    };

    if (!formData.name) newErrors.name = 'Le nom est requis';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    if (!formData.company) newErrors.company = 'Le nom du restaurant est requis';
    if (!formData.message) newErrors.message = 'Veuillez nous parler de votre restaurant';

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
          message: data.message || 'Échec de l\'envoi. Veuillez réessayer.'
        }));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({
        ...prev,
        message: 'Échec de l\'envoi. Veuillez réessayer.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <Image
          src="https://i.ibb.co/ZRBWrsmS/solution-pro.png"
          alt="Restaurant partner program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/90 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Espace restaurateurs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vos invendus ont de la valeur
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Avec Naam&acirc;, proposez vos surplus sous forme de paniers surprise. Vous attirez une nouvelle clientèle, vous générez du chiffre en plus et vous réduisez le gaspillage — sans prise de tête.
            </p>
            <a href="#partner-form" className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
              Devenir partenaire
            </a>
          </div>
        </div>
      </section>

      {/* How It Works for Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple comme bonjour</h2>
            <p className="text-lg text-gray-600">Quelques minutes suffisent pour commencer à vendre vos surplus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Composez vos paniers</h3>
              <p className="text-gray-600">Définissez la taille (S, M, L), le prix et les créneaux de retrait. C’est vous qui décidez.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Organisez votre semaine</h3>
              <p className="text-gray-600">Indiquez quels jours et combien de paniers vous souhaitez proposer. Le reste est automatique.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Encaissez & Suivez</h3>
              <p className="text-gray-600">Les clients réservent, passent et paient sur place. Vous suivez tout en temps réel depuis votre espace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre espace de gestion</h2>
            <p className="text-lg text-gray-600">Un tableau de bord pensé pour les restaurateurs, pas les développeurs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Suivi des ventes</h3>
              <p className="text-gray-600">
                Visualisez vos revenus au jour, à la semaine ou au mois. Repérez ce qui marche le mieux et ajustez vos offres.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning de la semaine</h3>
              <p className="text-gray-600">
                Préparez votre semaine en quelques clics : jours, quantités, types de paniers. Tout se programme à l’avance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Notifications instantanées</h3>
              <p className="text-gray-600">
                Chaque nouvelle commande déclenche une alerte. Gérez les retraits et le statut des commandes en direct.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Retours clients</h3>
              <p className="text-gray-600">
                Consultez les avis laissés par vos clients. Une bonne note attire naturellement plus de commandes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold">1000+</div>
              <div className="text-sm text-white/80 mt-2">Utilisateurs déjà inscrits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">Gratuit</div>
              <div className="text-sm text-white/80 mt-2">Sans frais d’inscription</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold">24h</div>
              <div className="text-sm text-white/80 mt-2">Pour être opérationnel</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ Partenaires</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Comment je commence ?</h4>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous. Notre équipe vous rappelle sous 24 h et s’occupe de tout configurer avec vous.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">C’est payant ?</h4>
              <p className="text-gray-600">
                L’inscription est gratuite. On prend juste une petite commission sur chaque panier vendu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Et si j’ai besoin d’aide ?</h4>
              <p className="text-gray-600">
                On est là ! Par email à contact@naam&acirc;.com ou directement depuis l’app. On vous accompagne à chaque étape.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Je gère mon planning moi-même ?</h4>
              <p className="text-gray-600">
                Totalement. Jours, quantités, horaires… vous gardez la main sur tout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="partner-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Devenir partenaire</h2>
            <p className="text-gray-600">Décrivez-nous votre restaurant et on s’occupe du reste.</p>
          </div>
          <div className="max-w-xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Votre nom</label>
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
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nom du restaurant</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Nom de votre restaurant" disabled={isLoading} />
                  {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Parlez-nous de votre restaurant</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Cuisine, quartier, volume d’invendus habituel..." disabled={isLoading}></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={isLoading}>
                  {isLoading ? 'Envoi en cours...' : 'Rejoindre Naam\u00e2'}
                </button>
              </form>
            ) : (
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <svg className="mx-auto h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Demande envoyée !</h3>
                <p className="mt-2 text-gray-600">
                  Notre équipe vous recontacte sous 24 h pour mettre en place votre espace sur Naam&acirc;.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
