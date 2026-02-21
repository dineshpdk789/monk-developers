'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jatin Paliwal',
      location: 'Founder, Homesay',
      category: 'Web & App',
      content: 'Working with JKG Developers was a highly strategic move for us. They didn\'t just build a website; they delivered a powerful lead-generation tool that has made our brand visible and credible online. Crucially, the custom internal app they developed for generating quotations has completely transformed our sales process. It’s fast, error-free, and has given our team back invaluable time. They are true partners in development.',
      rating: 5
    },
    {
      name: 'Amit Kumar Dutta',
      location: 'Co-Founder, RetroFM',
      category: 'Web App',
      content: 'JKG Developers delivered an indispensable extension of our business. The web application for our audio stories not only gives us the critical web presence we needed but acts as a seamless engine for converting free web users into valuable paid app subscribers. The administrative panel is incredibly robust, allowing our team to manage our content, artists, and operations with unprecedented efficiency.',
      rating: 5
    },
    {
      name: 'Richard Omiyale',
      location: 'Founder, Romet Health Care',
      category: 'Web & SEO',
      content: 'JKG Developers successfully built our digital foundation. The website is effective, and their targeted Local SEO strategy in Florida has been crucial, delivering a consistent stream of high-quality leads directly to our business. Highly recommend for growth-focused web services.',
      rating: 5
    },
    {
      name: 'Rohit Baidya',
      location: 'MD, NFT Legend',
      category: 'Mobile App',
      content: 'JKG Developers successfully built the core of our business: a high-performance Android NFT marketplace backed by an efficient admin panel. Their expertise in complex platform development was clear, delivering a solution that is both powerful and reliable.',
      rating: 5
    },
    {
      name: 'Chetan',
      location: 'Digitalized Currency',
      category: 'Exchange',
      content: 'JKG Developers was instrumental in launching our exchange. They delivered a secure and robust Sidra Coin trading web application paired with a powerful admin panel. Their expertise allowed us to quickly enter the crypto market with a professional, fully manageable platform.',
      rating: 5
    },
    {
      name: 'Tashi Dorjee',
      location: 'Founder, Dekho Pradesh',
      category: 'Travel',
      content: 'We needed a reliable, user-friendly platform to manage bookings for Arunachal Pradesh. JKG Developers delivered a great website that simplifies the booking process, combined with an easy-to-use admin panel.',
      rating: 5
    },
    {
      name: 'Logsang Yountan',
      location: 'Owner, Hormu Homestay',
      category: 'Hospitality',
      content: 'The website built by JKG Developers is perfect for our homestay. It’s simple for guests to book rooms, and the admin panel makes managing our reservations incredibly easy.',
      rating: 5
    },
    {
      name: 'Rajesh Biswas',
      location: 'Founder, Ziip Trip',
      category: 'Travel & Marketing',
      content: 'JKG Developers delivered a great tour and travel website, but their true value was in their combined offering. The targeted Meta Ads campaign they managed was highly effective, bringing in a consistent flow of quality leads right from launch.',
      rating: 5
    },
    {
      name: 'Piyush Roy',
      location: 'Founder, Roy Associates',
      category: 'Finance',
      content: 'JKG Developers built a website that accurately reflects our professionalism and the depth of our financial expertise. It serves as an essential digital front-door, enhancing our credibility and making it easy for clients nationwide to understand our services.',
      rating: 5
    },
    {
      name: 'Shilpa Kiran',
      location: 'VP IT, Bangalore Valuers',
      category: 'Association',
      content: 'JKG Developers built a high-caliber digital platform that acts as the central hub for our professional association. The website and the robust admin panel have streamlined our membership process and made organizing workshops and sharing knowledge nationally seamless.',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            What our clients say about us
          </p>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Our clients consistently praise us for delivering innovative solutions, meeting deadlines, and exceeding expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                      {testimonial.category}
                    </div>
                    
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-secondary-100 mt-auto">
                    <div>
                      <div className="font-semibold text-secondary-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
