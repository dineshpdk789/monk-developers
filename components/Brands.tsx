'use client'

import { motion } from 'framer-motion'

const Brands = () => {
  const brands = [
    { name: 'TechCorp', color: 'from-blue-400 to-blue-600' },
    { name: 'DataFlow', color: 'from-purple-400 to-purple-600' },
    { name: 'CloudBase', color: 'from-cyan-400 to-cyan-600' },
    { name: 'AppWorks', color: 'from-green-400 to-green-600' },
    { name: 'WebScale', color: 'from-orange-400 to-orange-600' },
    { name: 'DevHub', color: 'from-pink-400 to-pink-600' }
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
            We worked with global largest brands
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 h-32 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <div className="text-white font-bold text-lg">
                    {brand.name.substring(0, 2).toUpperCase()}
                  </div>
                </motion.div>
              </div>
              
              <div className="text-center mt-4">
                <div className="text-sm font-medium text-secondary-700 group-hover:text-primary-600 transition-colors duration-300">
                  {brand.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-primary-700 font-medium">Trusted by industry leaders</span>
            </div>
            <div className="w-px h-6 bg-primary-300"></div>
            <span className="text-primary-600 font-bold">10+ Projects Delivered</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Brands