'use client'

import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, BarChart } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Background Shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-100/50 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-secondary-600">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 leading-tight mb-6"
            >
              Accelerate Your <span className="text-primary-600">Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We build high-performance websites, mobile apps, and digital strategies that drive results and transform businesses.
            </motion.p>

            <motion.h5
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-lg font-semibold text-secondary-800 mb-8"
              >
              Expertise in Web Development, App Development, UI/UX Design & Digital Marketing.
            </motion.h5>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-3"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-secondary-100"
          >
            <h5 className="text-2xl font-bold text-secondary-900 mb-2">
              Start Your Project
            </h5>
            <p className="text-secondary-600 mb-6">
              Get a free consultation and project estimate
            </p>

            <ContactForm hideTitle={true} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
