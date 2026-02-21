'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'giripro360@gmail.com',
      description: 'We reply within 24 hours',
      link: 'mailto:giripro360@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9908647418',
      description: 'Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM',
      link: 'tel:+919908647418'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      content: '+91 9908647418',
      description: 'Chat with us on WhatsApp',
      link: 'https://wa.me/919908647418'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lakshminagar',
      description: 'Dharmavaram, Andhra Pradesh',
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Ready to start your next project? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
              >
                <ContactForm />
              </motion.div>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105"
                >
                  <Link href={info.link} target={info.title === 'Visit Us' ? '_self' : '_blank'}>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm text-primary-600">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-secondary-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-secondary-500 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
