"use client"

import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-label="decorative background" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,.15), transparent 40%)" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Let&apos;s make something great together
            </h2>
            
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              Using year-over-year most design approaches and latest techs, your website will be lightning fast and visually stunning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="https://wa.me/919908647418" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-primary-100">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm hideTitle={true} theme="dark" />

                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-primary-100">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 9908647418</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-100">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">giripro360@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
