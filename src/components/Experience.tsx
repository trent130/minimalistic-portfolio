import { motion } from 'framer-motion';

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    position: "Full Stack Developer",
    company: "Lish AI Labs",
    period: "2024 - Present",
    description: "Development of enterprise applications using React, Node.js, and Docker. Implemented CI/CD pipelines and mentored by senior developers.",
    technologies: ["React", "Node.js", "python", "TypeScript", "Docker"]
  },
  {
    position: "Developer",
    company: "Zendawa",
    period: "2024 - Present",
    description: "Development of virtual assistant chatbot and foundation website using react and django backend.",
    technologies: ["React", "Node.js", "python", "TypeScript", "Docker"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-700" />
              
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 -left-[8px] top-2 rounded-full border-4 border-white dark:border-gray-900 bg-black dark:bg-white" />
              
              {/* Content */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full
                        bg-gray-200 dark:bg-gray-700
                        text-gray-700 dark:text-gray-300
                        hover:bg-gray-300 dark:hover:bg-gray-600
                        transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a "View More" button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/resume.pdf" // Add your resume link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 
              bg-black dark:bg-white
              text-white dark:text-black
              rounded-full hover:bg-gray-800 dark:hover:bg-gray-100
              transition-colors"
          >
            <span>View Full Resume</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}