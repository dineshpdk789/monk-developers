import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive banking application for iOS and Android platforms.',
      technologies: ['React Native', 'Firebase', 'Stripe API']
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Comprehensive dashboard design for data analytics and business intelligence.',
      technologies: ['Figma', 'Tailwind CSS', 'Chart.js']
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'Patient management system with appointment scheduling and medical records.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Social Media App',
      category: 'Mobile Development',
      description: 'Feature-rich social networking application with real-time messaging.',
      technologies: ['Flutter', 'WebSocket', 'AWS']
    },
    {
      title: 'Learning Platform',
      category: 'UI/UX Design',
      description: 'Educational platform with interactive courses and progress tracking.',
      technologies: ['Next.js', 'GraphQL', 'Prisma']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Explore our portfolio of innovative digital solutions that have helped businesses thrive and succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600">{project.title.substring(0, 2).toUpperCase()}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">{project.title}</h3>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}