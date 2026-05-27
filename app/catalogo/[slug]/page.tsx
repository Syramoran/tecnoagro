import { notFound } from "next/navigation"
import Link from "next/link"
import { MessageCircle, ChevronLeft } from "lucide-react"
import { products } from "@/data/products"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppFAB } from "@/components/landing/whatsapp-fab"
import { ProductImageCarousel } from "@/components/catalog/product-image-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const waMessage = encodeURIComponent(
    `Hola, quiero más información sobre ${product.name}`
  )

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/catalogo"
              className="hover:text-primary transition-colors"
            >
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Image Carousel */}
            <ProductImageCarousel
              images={product.images}
              videos={product.videos}
              productName={product.name}
            />

            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="text-primary font-medium text-sm">
                  {product.tagline}
                </p>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <Button
                  asChild
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={`https://wa.me/5493435077008?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </a>
                </Button>

                <Button variant="ghost" asChild className="gap-2 w-fit">
                  <Link href="/catalogo">
                    <ChevronLeft className="h-4 w-4" />
                    Volver al catálogo
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Long Description Sections */}
          {product.longDescription && product.longDescription.length > 0 && (
            <div className="mt-14 border-t border-border pt-10 space-y-8">
              {product.longDescription.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                  {section.videos && section.videos.length > 0 && (
                    <div className="mt-4 flex flex-col gap-3">
                      {section.videos.map((src, vi) => (
                        <video
                          key={vi}
                          src={src}
                          controls
                          className="w-full rounded-lg"
                          aria-label={`${section.title} - video ${vi + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
