'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TestimonialsComponent from '@/components/Testimonials'

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <TestimonialsComponent />
      </div>
      <Footer />
    </main>
  )
}
