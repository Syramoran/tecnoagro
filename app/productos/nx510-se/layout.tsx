import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHCNAV NX510 SE',
  description: 'El NX510 SE ofrece una solución de reacondicionamiento asequible, compacta y completa para vehículos agrícolas, con precisión entre pasadas de hasta 2,5 cm.',
  alternates: {
    canonical: '/productos/nx510-se',
  },
  openGraph: {
    title: 'CHCNAV NX510 SE | Tecnoagro',
    description: 'El NX510 SE ofrece una solución de reacondicionamiento asequible, compacta y completa para vehículos agrícolas, con precisión entre pasadas de hasta 2,5 cm.',
    url: '/productos/nx510-se',
    images: [{ url: '/chcnav-nx510-se/foto-producto-2.jpg' }],
  },
}

export default function NX510SELayout({ children }: { children: React.ReactNode }) {
  return children
}
