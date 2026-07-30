import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHCNAV NX610',
  description: 'El sistema de dirección automatizado NX610 de CHCNAV conecta a redes GNSS RTK y al servicio PointSky, logrando una precisión de ±2,5 cm incluso sin cobertura de red.',
  alternates: {
    canonical: '/productos/nx610',
  },
  openGraph: {
    title: 'CHCNAV NX610 | Tecnoagro',
    description: 'El sistema de dirección automatizado NX610 de CHCNAV conecta a redes GNSS RTK y al servicio PointSky, logrando una precisión de ±2,5 cm incluso sin cobertura de red.',
    url: '/productos/nx610',
    images: [{ url: '/chcnav-610/foto-producto-2.jpg' }],
  },
}

export default function NX610Layout({ children }: { children: React.ReactNode }) {
  return children
}
