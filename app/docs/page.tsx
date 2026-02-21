'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const Documentation = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="section-padding pt-24 lg:pt-30 bg-gradient-to-br from-primary-50 to-white">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>
        <p className="mb-4">
          Welcome to our documentation! Here, you will find detailed information on how to use our platform, including tutorials, guides, and API references.
        </p>
        {/* Add more sections as needed */}
      </section>
      <Footer />
    </main>
  )
}

export default Documentation
