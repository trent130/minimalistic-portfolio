import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';
import ErrorBoundary  from './ErrorBoundary';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Backend API',
      description: 'Scalable REST API for e-commerce platform with advanced features: JWT authentication, payment gateway integration, inventory management, and real-time order tracking. Optimized for high-traffic loads.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Daraja API', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/trent130/EasyMarket',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Real Estate Management API',
      description: 'Comprehensive backend system for property management with microservices architecture. Features include property listings API, tenant management, payment processing, and automated reporting systems.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['Nest.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Microservices', 'GraphQL'],
      githubUrl: 'https://github.com/trent130/hello',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Portfolio Backend System',
      description: 'Backend-focused portfolio showcasing server-side development skills. Features contact form API, email service integration, and performance monitoring. Built with modern backend technologies.',
      image: '/preview-image.png',
      technologies: ['React', 'TypeScript', 'EmailJS', 'Framer Motion', 'Tailwind CSS'],
      githubUrl: 'https://github.com/trent130/minimalistic-portfolio',
      liveUrl: 'https://lawrence-wafula.vercel.app/',
    },
  ]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    )
  );

  const technologies = ['all', ...new Set(projects.flatMap(p => 
    p.technologies.map(tech => tech.toLowerCase())
  ))];

  return (
    <ErrorBoundary>
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-mono">
              <span className="text-green-500">&gt;</span> projects --backend-focused
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Backend-focused projects showcasing API development, database design, 
              and system architecture. Each project emphasizes scalability and performance.
            </p>
          </motion.div>

          {/* Terminal-style project overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 mb-8 font-mono text-sm border border-gray-700"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400">~/projects</span>
            </div>
            <div className="text-green-400">
              <span className="text-blue-400">$</span> find . -name "*.py" -o -name "*.js" | wc -l
            </div>
            <div className="text-white mt-1">
              {projects.length} major backend projects completed
            </div>
            <div className="text-gray-400 mt-1">
              Focus: API Development, Database Architecture, System Design
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {technologies.map(tech => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-colors capitalize font-mono ${
                  filter === tech 
                    ? 'bg-green-600 text-white border border-green-500'
                    : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-green-500'
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
          
          {isLoading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-700 h-48 rounded-t-xl"></div>
                  <div className="bg-gray-800 p-6 rounded-b-xl border border-gray-700">
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProjectCard {...project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredProjects.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center text-gray-400 py-8 font-mono"
                >
                  // No projects found with the selected technology
                </motion.p>
              )}
            </div>
          )}

          {/* Additional backend focus note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="font-mono text-sm">
              <div className="text-gray-400 mb-2">// Backend Development Focus</div>
              <div className="text-green-400">
                Each project emphasizes server-side architecture, API design, and database optimization
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
}