import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Studio | Premium Printing Solutions in Dhaka',
  description: 'Top quality digital printing services in Dhaka. We offer banners, posters, brochures, business cards, offset printing, and more with state-of-the-art machinery.',
  keywords: ['digital printing', 'offset printing', 'dhaka printing', 'business cards', 'banners', 'brochures', 'printing studio', 'printing services bangladesh', 'Digital Studio'],
  authors: [{ name: 'Digital Studio' }],
  creator: 'Digital Studio',
  publisher: 'Digital Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Digital Studio - Premium Printing Solutions',
    description: 'Top quality digital printing services in Dhaka. Banners, posters, brochures, and business cards.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Digital Studio',
    images: [
      {
        url: '/images/hero_print.png',
        width: 1200,
        height: 630,
        alt: 'Digital Studio Printing Machinery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Studio - Premium Printing Solutions',
    description: 'Top quality digital printing services in Dhaka.',
    images: ['/images/hero_print.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
