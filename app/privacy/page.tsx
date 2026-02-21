'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website.
        </p>
        {/* Add more sections as needed */}
      </section>
      <Footer />
    </main>
  )
}

export default PrivacyPolicy