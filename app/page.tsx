import {
  Header,
  Hero,
  Services,
  Product,
  Testimonials,
  About,
  FAQ,
  Contact,
  Footer,
  WhatsAppFAB,
} from "@/components/landing"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <Testimonials />

        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
