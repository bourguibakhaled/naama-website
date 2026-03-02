'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorks() {
  const checkIcon = (
    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative py-16">
        <Image
          src="https://i.ibb.co/jkL6vKVK/fruit.png"
          alt="Fresh food saved from waste"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Naam&acirc;, comment ça marche ?
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trois étapes suffisent pour récupérer de bons plats à petit prix, tout en évitant le gaspillage.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">01</div>
                <h2 className="text-2xl font-bold mb-4">Trouvez votre panier</h2>
                <p className="text-gray-600 mb-6">
                  Ouvrez l’app et découvrez ce que les restaurants et boulangeries autour de vous proposent. Pour chaque panier, vous voyez :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">{checkIcon}Le prix barré et le prix réduit (à partir de -55 %)</li>
                  <li className="flex items-center">{checkIcon}Les créneaux de retrait</li>
                  <li className="flex items-center">{checkIcon}La distance et les avis clients</li>
                  <li className="flex items-center">{checkIcon}La taille du panier (S, M, L)</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-56 h-[460px] rounded-[2.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl bg-white">
                  <Image src="/app-browse.jpg" alt="Browse surprise bags on Naamâ" width={224} height={460} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">02</div>
                <h2 className="text-2xl font-bold mb-4">Réservez en un tap</h2>
                <p className="text-gray-600 mb-6">
                  Un panier vous fait envie ? La suite est ultra simple :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">{checkIcon}Réservez en une seconde depuis l’app</li>
                  <li className="flex items-center">{checkIcon}Recevez aussitôt votre code de retrait</li>
                  <li className="flex items-center">{checkIcon}Le paiement se fait sur place, au moment du retrait</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-56 h-[460px] rounded-[2.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl bg-white">
                  <Image src="/app-reserve.jpg" alt="Reserve a surprise bag on Naamâ" width={224} height={460} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-primary text-5xl font-bold mb-4">03</div>
                <h2 className="text-2xl font-bold mb-4">Régalez-vous</h2>
                <p className="text-gray-600 mb-6">
                  Plus qu’à passer récupérer votre panier :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">{checkIcon}Montrez votre code au restaurant</li>
                  <li className="flex items-center">{checkIcon}Passez pendant le créneau prévu</li>
                  <li className="flex items-center">{checkIcon}Dégustez et laissez votre avis</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-56 h-[460px] rounded-[2.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl bg-white">
                  <Image src="/app-orders.jpg" alt="Completed orders and savings on Naamâ" width={224} height={460} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Qu’est-ce qu’il y a dans le panier ?</h3>
              <p className="text-gray-600">
                Le contenu change chaque jour selon les invendus du restaurant. Une chose est sûre : la valeur du panier dépasse toujours son prix.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">C’est frais ?</h3>
              <p className="text-gray-600">
                Absolument. Ce sont des produits du jour que le restaurant n’a pas pu écouler : trop préparé, fin de service, etc. Rien de périmé.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Et si j’arrive en retard ?</h3>
              <p className="text-gray-600">
                Idéalement, passez pendant le créneau indiqué. En cas d’imprévu, contactez le restaurant directement via l’app.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Je peux annuler ?</h3>
              <p className="text-gray-600">
                Oui, jusqu’à 1 h avant le retrait. Passé ce délai, c’est le restaurant qui décide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie de vous lancer ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez Naam&acirc; et commencez à récupérer de bons repas à prix réduit.
          </p>
          <Link href="/download" className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
            Télécharger l’app
          </Link>
        </div>
      </section>
    </div>
  );
}
