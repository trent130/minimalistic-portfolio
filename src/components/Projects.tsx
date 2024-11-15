import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality and payment integration',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['jinja', 'python django', 'postgresql', 'daraja'],
      githubUrl: 'https://github.com/trent130/EasyMarket',
      liveUrl: undefined
    },
    {
      id: 2,
      title: 'Real Estate Management System',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['TypeScript', 'python django', 'postgresql', 'Tailwind', 'nest.js'],
      githubUrl: 'https://github.com/trent130/hello',
      liveUrl: undefined
    },
    {
      id: 3,
      title: 'Kahoot-like Game',
      description: 'Web application that you can make a quiz and collaborate between friends',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
      technologies: ['postgresql', 'nest.js', 'angular', 'tailwindcss'],
      githubUrl: 'https://github.com/Tech-Titan-Labs/kapoow',
      liveUrl: undefined
    }
  ]);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.technologies.includes(filter)
  );

  const technologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development,
            from front-end design to full-stack applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {technologies.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : ' dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard tags={[]} link={''} index={0} {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;