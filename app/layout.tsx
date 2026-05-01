import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Tecnoagro | Tecnología Simple al Alcance de Todos',
  description: 'Tecnología agrícola importada con atención personalizada. Piloto automático, sistemas de precisión y más. Asesoramiento directo de los dueños. Envíos a todo el país.',
  keywords: ['tecnología agrícola', 'piloto automático', 'agricultura de precisión', 'tractores', 'siembra', 'pulverización', 'Argentina'],
  authors: [{ name: 'Tecnoagro' }],
  openGraph: {
    title: 'Tecnoagro | Tecnología Simple al Alcance de Todos',
    description: 'Tecnología agrícola importada con atención personalizada directa de los dueños.',
    type: 'website',
    locale: 'es_AR',
  },
  icons: {
    icon: '/images/icono.png',
    apple: '/images/icono.png',
  },
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
      <body className={`${poppins.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
