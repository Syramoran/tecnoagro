import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const SITE_URL = 'https://www.tecnoagroag.com.ar'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tecnoagro | Tecnología Simple al Alcance de Todos',
    template: '%s | Tecnoagro',
  },
  description: 'Tecnología agrícola importada con atención personalizada. Piloto automático, sistemas de precisión y más. Asesoramiento directo de los dueños. Envíos a todo el país.',
  keywords: ['tecnología agrícola', 'piloto automático', 'agricultura de precisión', 'tractores', 'siembra', 'pulverización', 'Argentina'],
  authors: [{ name: 'Tecnoagro' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Tecnoagro | Tecnología Simple al Alcance de Todos',
    description: 'Tecnología agrícola importada con atención personalizada directa de los dueños.',
    url: SITE_URL,
    siteName: 'Tecnoagro',
    type: 'website',
    locale: 'es_AR',
    images: [
      {
        url: '/foto-hero.png',
        width: 1536,
        height: 1024,
        alt: 'Tecnoagro - Tecnología agrícola de precisión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecnoagro | Tecnología Simple al Alcance de Todos',
    description: 'Tecnología agrícola importada con atención personalizada directa de los dueños.',
    images: ['/foto-hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/images/icono.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tecnoagro',
  url: SITE_URL,
  logo: `${SITE_URL}/images/icono.png`,
  image: `${SITE_URL}/images/logo-original.png`,
  description: 'Tecnología agrícola importada con atención personalizada. Piloto automático, sistemas de precisión y más.',
  sameAs: [
    'https://www.instagram.com/tecnoagr/',
    'https://www.facebook.com/profile.php?id=61570725516211',
  ],
}

export const viewport: Viewport = {
  themeColor: '#2d5016',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1529592622017099');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1529592622017099&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
