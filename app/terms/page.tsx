'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">
          These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
        </p>
        {/* Add more sections as needed */}
      </section>
      <Footer />
    </main>
  )
}

export default TermsOfService
