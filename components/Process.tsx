'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Rocket, ArrowRight } from 'lucide-react'

const Process = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Ideate',
      description: 'Spark innovative solutions and generate compelling concepts that drive your project forward.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Strategize',
      description: 'Develop a clear plan and outline actionable steps to ensure project success and measurable results.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Rocket,
      title: 'Execute',
      description: 'Implement the plan with precision and drive to achieve exceptional results that exceed expectations.',
      color: 'from-green-400 to-emerald-500'
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
            Process
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            How we work
          </p>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto mt-4">
            Adjust your design through a wide range of theme options in the development and instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="w-full h-32 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-xl flex items-center justify-center"
                  >
                    <div className="text-6xl font-bold text-secondary-200">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary-600" />
                  </div>
                </motion.div>
              )}
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
          <div className="inline-flex items-center space-x-4 bg-white rounded-full shadow-lg px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-secondary-600 font-medium">Ready to start your project?</span>
            </div>
            <button className="btn-primary text-sm px-6 py-2">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process