import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/common/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prestige Elite Rentals - Luxury Properties for Film & Photography',
  description: 'Discover exclusive luxury properties for film, photography, and commercial productions. Premium locations with cinematic excellence and architectural mastery.',
  keywords: 'luxury property rental, film locations, photography studios, commercial spaces, elite rentals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}