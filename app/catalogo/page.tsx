"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, Package, X } from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppFAB } from "@/components/landing/whatsapp-fab"
import { products, categories } from "@/data/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function CategoryList({
  activeCategory,
  onSelect,
}: {
  activeCategory: string | null
  onSelect: (cat: string | null) => void
}) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Filtrar por categoría">
      <button
        onClick={() => onSelect(null)}
        className={`w-full px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
          activeCategory === null
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:bg-muted hover:text-foreground"
        }`}
      >
        Todos
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`w-full px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
            activeCategory === cat
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:bg-muted hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </nav>
  )
}

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Catálogo de productos
            </h1>
            <p className="text-muted-foreground text-lg">
              Tecnología agrícola de precisión para optimizar cada labor en el campo.
            </p>
          </div>

          <div className="flex gap-8 items-start">
            {/* ── Desktop Sidebar ── */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-4 shadow-sm">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-1">
                  Categorías
                </h2>
                <CategoryList
                  activeCategory={activeCategory}
                  onSelect={setActiveCategory}
                />
              </div>
            </aside>

            {/* ── Content Area ── */}
            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                {/* Mobile filter trigger */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden gap-2 relative"
                      aria-label="Abrir filtros"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Filtrar
                      {activeCategory && (
                        <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                          1
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-72 p-0">
                    <SheetHeader className="px-5 pt-5 pb-3 border-b border-border">
                      <SheetTitle className="text-base">Categorías</SheetTitle>
                    </SheetHeader>
                    <div className="px-4 py-4">
                      <CategoryList
                        activeCategory={activeCategory}
                        onSelect={setActiveCategory}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Active filter chip */}
                {activeCategory && (
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {activeCategory}
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="flex flex-col overflow-hidden h-full group hover:shadow-md transition-shadow duration-200 border-border/60 pt-0">
                        {/* Image / Placeholder */}
                        <div className="bg-muted h-48 flex items-center justify-center overflow-hidden">
                          {product.images.length > 0 ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <Package className="h-14 w-14 text-muted-foreground/30" />
                          )}
                        </div>

                        <CardHeader className="pb-1 pt-2">
                          <Badge
                            variant="outline"
                            className="w-fit mb-2 text-xs font-medium text-muted-foreground border-border/60"
                          >
                            {product.category}
                          </Badge>
                          <h2 className="font-semibold text-foreground leading-snug text-base">
                            {product.name}
                          </h2>
                        </CardHeader>

                        <CardContent className="flex-1 pb-2">
                          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                            {product.shortDescription}
                          </p>
                        </CardContent>

                        <CardFooter className="pt-0">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                          >
                            <Link href={`/catalogo/${product.slug}`}>
                              Ver detalles
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Package className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground font-medium">
                    No hay productos en esta categoría.
                  </p>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="mt-3 text-sm text-primary hover:underline"
                  >
                    Ver todos los productos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
