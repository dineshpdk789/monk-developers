'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Lightbulb, Users, TrendingUp, Target, Heart, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication and alignment throughout every project.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Our solutions are designed to scale with your business, supporting your growth from startup to enterprise.'
    }
  ]

  const team = [
    {
      name: 'Satyajit Debnath',
      role: 'Founder & Lead Developer',
      description: 'Full-stack developer with 5+ years of experience in web and mobile development. Passionate about creating scalable solutions.'
    },
    {
      name: 'Chandan Kumar Tripathi',
      role: 'Business Operation Manager',
      description: 'Experienced business operations professional focused on streamlining processes, managing client relationships, and ensuring project delivery excellence.'
    },
    {
      name: 'Amit Pawani',
      role: 'Advisor',
      description: 'Strategic advisor bringing years of industry expertise and business insight to guide company growth and strategic decision-making.'
    },
    {
      name: 'Rohit Baidya',
      role: 'Business Acquisition Manager',
      description: 'Experienced business acquisition manager focused on driving growth and closing strategic partnerships.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              About JKG Developers
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Accelerating business growth through expert digital solutions, research, and consulting services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                JKG Developers was founded with a simple mission: to bridge the gap between innovative technology and business success. What started as a passion for creating beautiful, functional digital solutions has evolved into a comprehensive technology consultancy.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We believe that every business, regardless of size, deserves access to world-class technology solutions. Our team combines technical expertise with business acumen to deliver projects that not only meet specifications but exceed expectations. Today, we're proud to have helped dozens of businesses transform their digital presence, streamline their operations, and achieve measurable growth through technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary-600">JKG</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </main>
  )
}
