'use client'

import { motion } from 'framer-motion'
// import Image from 'next/image'
import { useState } from 'react'

interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'other'
  icon?: string
  color?: string
}

export default function AboutMe() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const technologies: Technology[] = [
    { name: 'TypeScript', category: 'frontend', color: '#3178C6', icon: '🔷' },
    { name: 'React.js', category: 'frontend', color: '#61DAFB', icon: '⚛️' },
    { name: 'JavaScript ES6+', category: 'frontend', color: '#F7DF1E', icon: '💛' },
    { name: 'Python', category: 'backend', color: '#3776AB', icon: '🐍' },
    { name: 'Java', category: 'backend', color: '#007396', icon: '☕' },
    { name: 'C#', category: 'backend', color: '#239120', icon: '🎯' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const filteredTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section className="min-h-screen bg-[#0a192f] text-gray-300 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          / about me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              I am currently a{' '}
              <span className="text-white font-semibold">
                Software Development Engineer
              </span>{' '}
              at{' '}
              <motion.span
                className="text-[#64ffda] hover:underline cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Amazon
              </motion.span>
              , working in the AWS sector under team Route 53. At the same time, I am undertaking a
              part-time{' '}
              <span className="text-white font-semibold">
                Master&apos;s of Science in Software Engineering
              </span>{' '}
              at{' '}
              <motion.span
                className="text-[#64ffda] hover:underline cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                University of Oxford
              </motion.span>
              .
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Technologies I work with:
                </p>
                <div className="flex gap-2">
                  {['all', 'frontend', 'backend'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors
                        ${activeCategory === category
                          ? 'bg-[#64ffda] text-[#0a192f]'
                          : 'text-[#64ffda] border border-[#64ffda] hover:bg-[#64ffda]/10'
                        }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-4"
              >
                {filteredTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group"
                  >
                    <span className="text-[#64ffda] transform group-hover:rotate-90 transition-transform">
                      ▹
                    </span>
                    <span className="flex items-center gap-2">
                      {tech.icon && <span>{tech.icon}</span>}
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              Outside of work, I&apos;m interested in following the developments of
              science. I also play a lot of video games. And make TikToks.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <motion.div 
              className="relative w-full aspect-square rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              /> */}
              <div className="absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -z-10"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 16, y: 16 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}