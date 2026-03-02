import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naamâ – Paniers surprise de restaurants à -55 % minimum',
  description: 'Récupérez chaque jour des paniers garnis par les restaurants de votre quartier à prix mini. Anti-gaspi, gourmand et malin.',
  keywords: 'anti-gaspi, paniers surprise, invendus restaurant, bons plans resto, éco-responsable, WasteLess, Naamâ',
  openGraph: {
    title: 'Naamâ – Paniers surprise de restaurants à -55 % minimum',
    description: 'Des paniers garnis par les restos de votre quartier, à prix réduit. Téléchargez l\'app WasteLess par Naamâ.',
    url: 'https://naamâ.com',
    siteName: 'Naamâ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
