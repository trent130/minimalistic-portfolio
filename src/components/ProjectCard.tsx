import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={`Screenshot of ${title}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-115"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 text-black rounded-full hover:bg-white transition-colors"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 text-black rounded-full hover:bg-white transition-colors"
                aria-label={`Visit ${title} live site`}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}