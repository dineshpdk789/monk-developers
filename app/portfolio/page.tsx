'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Monitor, Smartphone, ShoppingCart, Palette, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  const categories = [
    {
      icon: Monitor,
      title: 'Websites We Design',
      description: 'Visually stunning and highly functional websites that deliver exceptional user experiences.',
      link: '/portfolio/websites'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps built for performance and engagement.',
      link: '/portfolio/mobile-apps'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Robust online stores with secure payment integration and inventory management.',
      link: '/portfolio/ecommerce'
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Creative branding, UI/UX design, and marketing materials that stand out.',
      link: '/portfolio/graphics-design'
    },
    {
      icon: TrendingUp,
      title: 'SEO Solutions',
      description: 'Data-driven SEO strategies to improve rankings and drive organic traffic.',
      link: '/portfolio/seo'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16pt-24 lg:pt-30 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h6 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary-600 font-semibold mb-4 text-lg"
            >
              Transforming Visions into Digital Success
            </motion.h6>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6"
            >
              Our Portfolio
            </motion.h2>
            <motion.h6 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-secondary-600 leading-relaxed font-normal"
            >
              We take pride in our innovative approach to creating visually stunning and highly functional websites, mobile applications, e-commerce platforms, graphics design, and SEO solutions.
            </motion.h6>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-secondary-100"
              >
                <div className="mb-6 text-primary-600">
                  <category.icon className="w-12 h-12" />
                </div>
                <h5 className="text-xl font-bold text-secondary-900 mb-4">
                  {category.title}
                </h5>
                <p className="text-secondary-600 mb-6 flex-grow">
                  {category.description}
                </p>
                <Link href={category.link}>
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 font-medium">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
