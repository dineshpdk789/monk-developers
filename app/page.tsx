import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'

// import Testimonials from '@/components/Testimonials'
import Brands from '@/components/Brands'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      
      {/* <Testimonials /> */}
      <Brands />
      <CTA />
      <Footer />
    </main>
  )
}