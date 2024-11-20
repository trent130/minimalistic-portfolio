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
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality and payment integration. Includes user authentication, product management, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['Django', 'PostgreSQL', 'Daraja API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/trent130/EasyMarket',
    },
    {
      id: 2,
      title: 'Real Estate Management System',
      description: 'A comprehensive property management solution with real-time updates, document handling, and tenant communication features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['TypeScript', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Nest.js'],
      githubUrl: 'https://github.com/trent130/hello',
    },
    {
      id: 3,
      title: 'Kahoot-like Game',
      description: 'Interactive quiz platform enabling real-time multiplayer gaming with custom quiz creation and instant scoring.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
      technologies: ['PostgreSQL', 'Nest.js', 'Angular', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Tech-Titan-Labs/kapoow',
    }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in web development,
              from responsive front-end designs to scalable full-stack applications.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {technologies.map(tech => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-colors capitalize ${
                  filter === tech 
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
                  <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-t-xl"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-b-xl">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
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
                  className="col-span-full text-center text-gray-600 dark:text-gray-400 py-8"
                >
                  No projects found with the selected technology.
                </motion.p>
              )}
            </div>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}