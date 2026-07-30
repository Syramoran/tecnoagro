import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de productos',
  description: 'Explorá el catálogo completo de Tecnoagro: fertilizadoras de banda, pilotos automáticos, guiado GNSS y sistemas de tasa variable para agricultura de precisión.',
  alternates: {
    canonical: '/catalogo',
  },
  openGraph: {
    title: 'Catálogo de productos | Tecnoagro',
    description: 'Explorá el catálogo completo de Tecnoagro: fertilizadoras de banda, pilotos automáticos, guiado GNSS y sistemas de tasa variable para agricultura de precisión.',
    url: '/catalogo',
  },
}

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return children
}
