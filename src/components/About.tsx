import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  const technologies: Technology[] = [
    { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'nest.js', icon: '🎯', color: '#E0234E' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Django', icon: '🎯', color: '#092E20' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'Machine Learning', icon: '🤖', color: '#FF6F61' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-12" />
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3 space-y-6">
                <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 bg-gray-200 dark:bg-gray-700 rounded" />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white font-mono"
        >
          <span className="text-green-500">&gt;</span> about.md
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3 space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I'm a{' '}
              <motion.span
                whileHover={{ color: '#10b981' }}
                className="text-gray-900 dark:text-white font-medium transition-colors font-mono"
              >
                backend-focused full-stack developer
              </motion.span>{' '}
              with 2 years of experience architecting scalable server-side solutions. I specialize in building robust APIs,
              optimizing database performance, and designing distributed systems.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Currently, I'm focusing on expanding my expertise in{' '}
              <motion.span
                whileHover={{ color: '#10b981' }}
                className="text-gray-900 dark:text-white font-medium transition-colors font-mono"
              >
                microservices architecture and DevOps practices
              </motion.span>{' '}
              while deepening my knowledge in machine learning integration for backend systems.
            </p>

            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400 mb-2">// Tech Stack Overview</div>
              <div className="space-y-1">
                <div><span className="text-blue-400">Backend:</span> <span className="text-green-400">Python, Node.js, Django, Nest.js</span></div>
                <div><span className="text-blue-400">Database:</span> <span className="text-green-400">PostgreSQL, MongoDB, Redis</span></div>
                <div><span className="text-blue-400">DevOps:</span> <span className="text-green-400">Docker, CI/CD, AWS</span></div>
                <div><span className="text-blue-400">Frontend:</span> <span className="text-green-400">React, TypeScript, Tailwind</span></div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white font-mono">
                <span className="text-green-500">$</span> ls -la skills/
              </p>
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {technologies.map((tech, index) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group"
                  >
                    <span className="text-green-500 transform group-hover:rotate-90 transition-transform duration-300 font-mono">
                      →
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-mono">
                      <span>{tech.icon}</span>
                      <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-900 dark:bg-gray-800 shadow-lg border border-gray-700"
              >
                <h4 className="text-xl font-semibold mb-4 text-green-400 font-mono">
                  // Backend Focus
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono">→</span>
                    <span>RESTful API Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono">→</span>
                    <span>Database Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono">→</span>
                    <span>System Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono">→</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-900 dark:bg-gray-800 shadow-lg border border-gray-700"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-400 font-mono">
                  // Development Philosophy
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400 font-mono">→</span>
                    <span>Scalable Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400 font-mono">→</span>
                    <span>Test-Driven Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400 font-mono">→</span>
                    <span>Security Best Practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400 font-mono">→</span>
                    <span>Continuous Learning</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/3 relative group"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <img
                src="/test.jpg"
                alt="Profile"
                className="rounded-lg object-cover transition-all duration-300 
                  group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-[#64ffda]/10 
                mix-blend-multiply group-hover:bg-transparent 
                transition-colors duration-300" 
              <div className="absolute inset-0 bg-green-500/10 
                mix-blend-multiply group-hover:bg-transparent 
                transition-colors duration-300" 
              />
            </div>
            <motion.div 
              className="absolute inset-0 border-2 border-green-500 rounded-lg -z-10"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 16, y: 16 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}