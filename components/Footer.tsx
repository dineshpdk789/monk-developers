'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      // { name: 'Career', href: '/career' },
      // { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'UI/UX Design', href: '/services#design' },
      { name: 'Digital Marketing', href: '/services#marketing' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      // { name: 'Case Studies', href: '/case-studies' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  }

  // const socialLinks = [
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Twitter, href: '#', label: 'Twitter' },
  //   { icon: Instagram, href: '#', label: 'Instagram' },
  //   { icon: Github, href: '#', label: 'GitHub' }
  // ]

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
                JKG Developers
              </h3>
              <p className="text-secondary-300 leading-relaxed mb-6">
                Transforming businesses through cutting-edge technology and innovative digital solutions that drive growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-secondary-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>giripro360@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+91 9908647418</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Lakshminagar, Dharmavaram</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {/* socialmedia apps */}
              {/* {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))} */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-secondary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-secondary-400 text-sm"
            >
              © {new Date().getFullYear()} JKG Developers. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center space-x-6 text-secondary-400 text-sm"
            >
              <Link href="/privacy" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer