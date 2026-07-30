import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHCNAV NX612',
  description: 'El sistema de dirección automatizado NX612 de CHCNAV conecta a redes GNSS RTK y al servicio satelital SkyTrix, logrando una precisión de ±2,5 cm incluso en áreas remotas.',
  alternates: {
    canonical: '/productos/nx612',
  },
  openGraph: {
    title: 'CHCNAV NX612 | Tecnoagro',
    description: 'El sistema de dirección automatizado NX612 de CHCNAV conecta a redes GNSS RTK y al servicio satelital SkyTrix, logrando una precisión de ±2,5 cm incluso en áreas remotas.',
    url: '/productos/nx612',
    images: [{ url: '/chcnav-nx612/foto-producto-2.jpg' }],
  },
}

export default function NX612Layout({ children }: { children: React.ReactNode }) {
  return children
}
