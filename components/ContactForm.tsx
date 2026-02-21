'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

interface ContactFormProps {
  className?: string
  title?: string
  hideTitle?: boolean
  theme?: 'light' | 'dark'
}

const ContactForm = ({ className = "", title = "Send us a message", hideTitle = false, theme = 'light' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
    alert('Thank you! We will get back to you soon.')
  }

  const inputClasses = theme === 'light' 
    ? "w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
    : "w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"

  const labelClasses = theme === 'light'
    ? "block text-sm font-medium text-secondary-700 mb-2"
    : "block text-sm font-medium text-white mb-2"

  const buttonClasses = theme === 'light'
    ? "w-full btn-primary inline-flex items-center justify-center space-x-2 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
    : "w-full bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2"

  return (
    <div className={className}>
      {!hideTitle && (
        <h2 className={`text-2xl lg:text-3xl font-bold mb-8 ${theme === 'light' ? 'text-secondary-900' : 'text-white'}`}>
          {title}
        </h2>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="+91 9999999999"
            />
          </div>
          <div>
            <label htmlFor="company" className={labelClasses}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Company Ltd"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            required
            className={inputClasses}
          >
            <option value="" className="text-secondary-900">Select a project type</option>
            <option value="web-development" className="text-secondary-900">Web Development</option>
            <option value="mobile-app" className="text-secondary-900">Mobile App Development</option>
            <option value="ui-ux-design" className="text-secondary-900">UI/UX Design</option>
            <option value="digital-marketing" className="text-secondary-900">Digital Marketing</option>
            <option value="consulting" className="text-secondary-900">Consulting</option>
            <option value="other" className="text-secondary-900">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={buttonClasses}
        >
          {theme === 'light' && <Send className="w-5 h-5" />}
          <span>Send Message</span>
        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm
