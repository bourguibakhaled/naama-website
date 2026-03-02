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
      const response = await fetch(API_ENDPOINTS.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ email: '', phone: '' });
      } else {
        setSubmitError(data.message || 'Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitError('Erreur réseau. Veuillez réessayer.');
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
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="https://i.ibb.co/sdYn26CW/food-market.png"
          alt="Surprise bags from local restaurants"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/90 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Savourez plus, gaspillez moins.
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Paniers Surprise des<br />
              <span className="text-primary">commerces Locaux</span><br />
              à -55% Minimum
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Avec Naam&acirc;, récupérez chaque jour des paniers garnis par les commerces de votre quartier. Des produits frais, des prix mini et zéro gaspi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/download" className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
                Télécharger l'app
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
                Comment ça marche
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-white max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold">55%</div>
              <div className="text-sm text-white/80 mt-1">Économies minimum</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-sm text-white/80 mt-1">Frais & Qualité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi Naam&acirc; ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manger bien sans se ruiner, tout en faisant un geste pour la planète.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paniers Surprise</h3>
              <p className="text-gray-600">Chaque jour, les commerces composent des paniers avec leurs invendus du jour. Résultat : de bons plats à -55 % minimum.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Juste à côté</h3>
              <p className="text-gray-600">Repérez en un clin d'œil les restaurants et boulangeries autour de vous grâce à la carte intégrée.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Un geste concret</h3>
              <p className="text-gray-600">Suivez le CO2 économisé et les repas sauvés du gaspillage. Chaque panier compte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-lg text-gray-600">En trois étapes, vous sauvez un repas et votre porte-monnaie.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
              <div className="mx-auto mb-6 w-48 h-[380px] rounded-[2rem] border-4 border-gray-800 overflow-hidden shadow-xl bg-white">
                <Image src="/app-browse.jpg" alt="Browse surprise bags on Naamâ" width={192} height={380} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Explorez</h3>
              <p className="text-gray-600">Ouvrez l’app et parcourez les paniers disponibles autour de vous : prix, créneaux de retrait, avis… tout y est.</p>
            </div>
            <div className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              <div className="mx-auto mb-6 w-48 h-[380px] rounded-[2rem] border-4 border-gray-800 overflow-hidden shadow-xl bg-white">
                <Image src="/app-reserve.jpg" alt="Reserve a surprise bag on Naamâ" width={192} height={380} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Réservez</h3>
              <p className="text-gray-600">Un panier vous tente ? Réservez-le en un clic. Vous recevez un code et n’avez plus qu’à passer le récupérer.</p>
            </div>
            <div className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              <div className="mx-auto mb-6 w-48 h-[380px] rounded-[2rem] border-4 border-gray-800 overflow-hidden shadow-xl bg-white">
                <Image src="/app-orders.jpg" alt="Completed orders and savings on Naamâ" width={192} height={380} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Savourez</h3>
              <p className="text-gray-600">Passez au restaurant, réglez sur place et découvrez ce que le chef vous a préparé !</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="inline-flex items-center text-primary font-semibold hover:underline">
              Tout savoir sur le fonctionnement
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vous êtes restaurateur ?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Vos invendus méritent mieux que la poubelle. Avec Naam&acirc;, transformez-les en revenus, attirez une nouvelle clientèle et gérez tout depuis un tableau de bord simple et efficace.
            </p>
            <Link href="/solutions-pro" className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soyez les premiers</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              L’app arrive bientôt. Inscrivez-vous dès maintenant pour profiter de paniers offerts, de réductions et d’un accès prioritaire au lancement.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre adresse email"
                  required
                  className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                  required
                  className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Inscription...' : 'S\'inscrire'}
              </button>
              {submitError && (
                <p className="text-red-200 text-sm mt-2">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-white text-sm mt-2 bg-white/20 rounded-lg p-3">
                  Merci ! Vous faites désormais partie des premiers inscrits. On vous prévient dès le lancement, avec de belles surprises à la clé.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
