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
    description: "Architected and developed scalable backend systems for AI-powered applications. Built RESTful APIs, optimized database queries, and implemented microservices architecture. Led backend development initiatives and code reviews.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker", "Redis", "API Design"]
  },
  {
    position: "Developer",
    company: "Zendawa",
    period: "2024 - Present",
    description: "Developed backend infrastructure for virtual assistant chatbot with natural language processing capabilities. Designed database schemas, implemented authentication systems, and optimized API performance.",
    technologies: ["Django", "Python", "PostgreSQL", "REST APIs", "WebSocket", "NLP Integration"]
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
          className="text-3xl font-bold text-center mb-12 dark:text-white font-mono"
        >
          <span className="text-green-500">&gt;</span> work_history.log
        </motion.h2>

        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 mb-12 font-mono text-sm border border-gray-700"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400">~/experience</span>
          </div>
          <div className="text-green-400">
            <span className="text-blue-400">$</span> grep -r "backend" career.log
          </div>
          <div className="text-white mt-2">
            2+ years of backend-focused development experience
          </div>
          <div className="text-gray-400 mt-1">
            Specializing in API development, database optimization, and system architecture
          </div>
        </motion.div>

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
              <div className="absolute left-0 top-0 h-full w-px bg-green-500 dark:bg-green-600" />
              
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 -left-[8px] top-2 rounded-full border-4 border-white dark:border-gray-900 bg-green-500 dark:bg-green-400" />
              
              {/* Content */}
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-green-400 font-mono">
                    {exp.position}
                  </h3>
                  <p className="text-blue-400 font-medium font-mono">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 font-mono">
                    {exp.period}
                  </p>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full font-mono
                        bg-gray-800 border border-gray-600
                        text-green-400
                        hover:bg-gray-700 hover:border-green-500
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
            href="../Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono
              bg-gray-900 border-2 border-green-500
              text-green-400
              rounded-lg hover:bg-green-500 hover:text-gray-900
              transition-colors"
          >
            <span>cat resume.pdf</span>
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
