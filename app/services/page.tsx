'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Code, 
  TrendingUp, 
  Smartphone, 
  ShoppingCart, 
  PenTool, 
  Share2, 
  Database,
  MessageSquare,
  Lightbulb,
  CheckCircle,
  Rocket,
  Headphones,
  Stethoscope,
  GraduationCap,
  Landmark,
  Building2,
  Hotel
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'World-class, responsive websites that engage your audience and provide excellent user experiences.',
      features: ['Custom Website Development', 'Responsive Design', 'CMS Development', 'E-commerce Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Robust & scalable e-commerce solutions that help you sell anything online with superb user experience.',
      features: ['Custom Online Store', 'Product Catalog', 'Shopping Cart', 'Payment Gateway'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
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
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engaging content marketing strategies that connect with your audience and drive business results.',
      features: ['Blog Writing', 'SEO Content', 'Video Production', 'Copywriting'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Database,
      title: 'Blockchain Development',
      description: 'Building secure, scalable blockchain solutions and decentralized apps.',
      features: ['Smart Contracts', 'dApp Development', 'Tokenomics', 'Wallet Integrations'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Social-first campaigns that grow brand awareness and engagement across channels.',
      features: ['Social Strategy', 'Content Creation', 'Paid Social Advertising', 'Community Management'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your requirements and understand your business goals.',
      icon: MessageSquare
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'We create a detailed plan and strategy tailored to your needs.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Our team brings your vision to life with cutting-edge technologies.',
      icon: Code
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'We rigorously test everything to ensure a bug-free experience.',
      icon: CheckCircle
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We launch your project and ensure everything runs smoothly.',
      icon: Rocket
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support to keep your project up-to-date.',
      icon: Headphones
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: Stethoscope },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Education', icon: GraduationCap },
    { name: 'Finance', icon: Landmark },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Hospitality', icon: Hotel }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="section-padding pt-24 lg:pt-30 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              We offer comprehensive digital solutions to help your business succeed in today's competitive market. 
              From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-secondary-100 p-8">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-secondary-600 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-secondary-600 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
           <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-9xl font-bold text-secondary-50 opacity-50 -mr-8 -mt-8 select-none group-hover:text-primary-50 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                        <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">{step.title}</h3>
                    <p className="text-secondary-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
            <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We cater to several industries and verticals, providing tailored solutions for each sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
               <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-secondary-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:border-primary-200"
               >
                 <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                   <industry.icon className="w-6 h-6" />
                 </div>
                 <h4 className="font-semibold text-secondary-900">{industry.name}</h4>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
