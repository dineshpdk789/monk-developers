'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, Code, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Website Development',
      description: 'World-class, responsive websites that engage your audience and provide excellent user experiences.',
      features: ['Custom Website Development', 'Responsive Design', 'CMS Development', 'E-commerce Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'E-commerce Development',
      description: 'Robust & scalable e-commerce solutions that help you sell anything online with superb user experience.',
      features: ['Custom Online Store', 'Product Catalog', 'Shopping Cart', 'Payment Gateway'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Digital Marketing',
      description: 'ROI-driven marketing strategies to grow your visibility, traffic, clicks, and conversions.',
      features: ['SEO', 'Social Media Marketing', 'Google Ads', 'Content Marketing'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Clean and modern design solutions that provide thoughtful and creative user experiences.',
      features: ['UI Design', 'UX Design', 'Wireframing', 'Brand Identity'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Blockchain Development',
      description: 'Building secure, scalable blockchain solutions and decentralized apps.',
      features: ['Smart Contracts', 'dApp Development', 'Tokenomics', 'Wallet Integrations'],
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Our full creative services for you
          </p>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            We'll help you from design to execution and marketing, turning your vision into success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-secondary-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-secondary-200">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-secondary-600">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/services"
                    className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services