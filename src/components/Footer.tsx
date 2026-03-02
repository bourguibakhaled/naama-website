import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-white text-2xl font-bold tracking-tight">Naam&acirc;</span>
            <p className="mt-3 text-sm text-gray-400">
              Des paniers surprise composés par les restaurants de votre quartier, à -55 % minimum. Bon pour vous, bon pour la planète.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">Comment ça marche</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors">Télécharger l'app</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-white font-semibold mb-4">Partenaires</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions-pro" className="hover:text-primary transition-colors">Espace restaurateurs</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@naamâ.com" className="hover:text-primary transition-colors">
                  contact@naamâ.com
                </a>
              </li>
              <li>
                <a href="https://naamâ.com" className="hover:text-primary transition-colors">
                  naamâ.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Naam&acirc;. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500">
            Ensemble contre le gaspillage alimentaire.
          </p>
        </div>
      </div>
    </footer>
  );
}
